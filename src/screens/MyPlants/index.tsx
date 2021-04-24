import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  SpotLight,
  SpotLightImage,
  SpotLightText,
  Plants,
  PlantsText,
  styles,
} from './styles';

import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';
import { IPlantProps, loadPlant } from '../../libs/storage';
import waterDrop from '../../assets/waterdrop.png';
import Header from '../../components/Header';
import PlantCardSecondary from '../../components/PlantCardSecondary';

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<IPlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  const info = 'Próximas regadas';

  useEffect(() => {
    const loadStorageData = async () => {
      const plantsStorage = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStorage[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt },
      );

      setNextWatered(
        `Regue sua ${plantsStorage[0].name} daqui a ${nextTime}.`,
      );

      setMyPlants(plantsStorage);
      setLoading(false);
    };
    loadStorageData();
  }, []);
  return (
    <Container>
      <Header />

      <SpotLight>
        <SpotLightImage source={waterDrop} />

        <SpotLightText>{nextWatered}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantsText>{info}</PlantsText>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
