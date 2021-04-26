import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
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
import { IPlantProps, loadPlant, removePlant } from '../../libs/storage';
import waterDrop from '../../assets/waterdrop.png';

import Header from '../../components/Header';
import PlantCardSecondary from '../../components/PlantCardSecondary';
import Load from '../../components/Load';

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<IPlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  const info = 'Próximas regadas';
  const noInfo = 'Sem agendamentos';

  const handleRemove = (plant: IPlantProps) => {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏🏻',
        style: 'cancel',
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {
            await removePlant(String(plant.id));
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id),
            );
          } catch (error) {
            Alert.alert('Não foi possivel remover! 😢');
          }
        },
      },
    ]);
  };

  useEffect(() => {
    const loadStorageData = async () => {
      const plantsStorage = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStorage[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt },
      );

      setNextWatered(`Regue sua ${plantsStorage[0].name} daqui a ${nextTime}.`);

      setMyPlants(plantsStorage);
      setLoading(false);
    };
    loadStorageData();
  }, []);

  if (loading) {
    return <Load />;
  }
  return (
    <Container>
      <Header />

      <SpotLight>
        <SpotLightImage source={waterDrop} />

        <SpotLightText>{nextWatered}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantsText>{myPlants.length ? info : noInfo}</PlantsText>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {
                handleRemove(item);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
