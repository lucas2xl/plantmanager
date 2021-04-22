import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';

import Button from '../../components/Button';

const Confirmation = () => {
  const navigation = useNavigation();

  const title = 'Prontinho';
  const subTitle =
    ' Agora vamos começar a cuidar das suas plantinhas com muito cuidado.';
  const buttonText = 'Começar';

  const handleMoveOn = () => {
    navigation.navigate('PlantSelect')
  }
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Footer>
          <Button 
            title={buttonText}
            onPress={handleMoveOn}
          />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
