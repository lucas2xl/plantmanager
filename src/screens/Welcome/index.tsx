import React from 'react';
import { Container, Warper, Title, Image, SubTitle, Touchable } from './styles';
import { Feather } from '@expo/vector-icons';

import watering from '../../assets/watering.png';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/core';

const Welcome = () => {
  const navigation = useNavigation();

  const title = 'Gerencie\nsuas plantas de\nforma fácil';
  const subTitle =
    'Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.';

  const handleStart = () => {
    navigation.navigate('UserIdentification');
  };

  return (
    <Container>
      <Warper>
        <Title>{title}</Title>
        <Image source={watering} resizeMode={'contain'} />
        <SubTitle>{subTitle}</SubTitle>
        <Touchable onPress={handleStart}>
          <Feather name={'chevron-right'} color={Colors.white} size={32} />
        </Touchable>
      </Warper>
    </Container>
  );
};

export default Welcome;
