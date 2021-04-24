import React, { useState } from 'react';
import { SvgFromUri } from 'react-native-svg';
import {
  Container,
  PlantInfo,
  PlantName,
  AboutPlant,
  Controller,
  TipController,
  TipImage,
  TipText,
  AlertLabel,
  DateTimerPickerButton,
  DateTimerPickerText,
} from './styles';
import DateTimerPicker, { Event } from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Alert, Platform } from 'react-native';
import { format, isBefore } from 'date-fns';
import { IPlantProps, loadPlant, savePlant } from '../../libs/storage';

import waterDrop from '../../assets/waterdrop.png';
import Button from '../../components/Button';

interface IParams {
  plant: IPlantProps;
}

const PlantSave = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const navigation = useNavigation();

  const alertLabel = 'Ecolha o melhor horário para ser lembrado:';
  const buttonTitle = 'Cadastrar planta';
  const alertText = {
    invalidTime: 'Escolha uma hora no futuro! ⏰',
    savingError: 'Não foi possivel salvar. 😢',
  };
  const dateTimerPickerText = `Mudar ${format(selectedDateTime, 'HH:mm')}`;

  const route = useRoute();
  const { plant } = route.params as IParams;

  const handleChangeTimer = (_: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(!showDatePicker);
    }
    // if (dateTime && isBefore(dateTime, new Date())) {
    //   setSelectedDateTime(new Date());
    //   return Alert.alert(alertText.invalidTime);
    // }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  const handleOpenDateTimePickerForAndroid = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handlePlantSave = async() => {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subTitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonText: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });

    } catch {
      return Alert.alert(alertText.savingError);
    }
  };


  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <PlantName>{plant.name}</PlantName>
        <AboutPlant>{plant.about}</AboutPlant>
      </PlantInfo>
      <Controller>
        <TipController>
          <TipImage source={waterDrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipController>
        <AlertLabel>{alertLabel}</AlertLabel>

        {showDatePicker && (
          <DateTimerPicker
            value={selectedDateTime}
            mode={'time'}
            display={'spinner'}
            onChange={handleChangeTimer}
          />
        )}
        {Platform.OS === 'android' && (
          <DateTimerPickerButton onPress={handleOpenDateTimePickerForAndroid}>
            <DateTimerPickerText>{dateTimerPickerText}</DateTimerPickerText>
          </DateTimerPickerButton>
        )}
        <Button title={buttonTitle} onPress={handlePlantSave} />
      </Controller>
    </Container>
  );
};

export default PlantSave;
