import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {
  styles,
  SafeAreaView,
  Wrapper,
  TitleStrong,
  Title,
  WrapperFlatListHorizontal,
  WrapperFlatListVertical,
} from './styles';
import api from '../../services/api';

import { IPlantProps } from '../../libs/storage';
import Colors from '../../styles/Colors';
import Header from '../../components/Header';
import EnvironmentButton from '../../components/EnvironmentButton';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import Load from '../../components/Load';

interface IEnvironmentsProps {
  key: string;
  title: string;
}


const PlantSelect = () => {
  const [environments, setEnvironments] = useState<IEnvironmentsProps[]>([]);
  const [plants, setPlants] = useState<IPlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<IPlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  const titleStrong = 'Em qual ambiente';
  const title = 'você quer colocar sua planta?';

  const fetchEnvironment = async () => {
    const { data } = await api.get(
      '/plants_environments?_sort=title&_order=asc',
    );
    setEnvironments([
      {
        key: 'all',
        title: 'Todos',
      },
      ...data,
    ]);
  };

  const fetchPlants = async () => {
    const { data } = await api.get(
      `/plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );
    if (!data) {
      return setLoading(true);
    }
    if (page > 1) {
      setPlants((ondValue) => [...ondValue, ...data]);
      setFilteredPlants((ondValue) => [...ondValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  };

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environment),
    );

    setFilteredPlants(filtered);
  };

  const handleFetchMore = (distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  };

  const handlePlantSelect = (plant: IPlantProps) => {
    navigation.navigate('PlantSave', {plant})
  };

  useEffect(() => {
    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) {
    return <Load />;
  }
  return (
    <SafeAreaView>
      <Wrapper>
        <Header />
        <TitleStrong>{titleStrong}</TitleStrong>
        <Title>{title}</Title>
      </Wrapper>
      <WrapperFlatListHorizontal>
        <FlatList
          keyExtractor={(item) => String(item.key)}
          contentContainerStyle={styles.flatListHorizontal}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
        />
      </WrapperFlatListHorizontal>

      <WrapperFlatListVertical>
        <FlatList
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={Colors.green} /> : <></>
          }
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item, )}
            />
          )}
        />
      </WrapperFlatListVertical>
    </SafeAreaView>
  );
};

export default PlantSelect;
