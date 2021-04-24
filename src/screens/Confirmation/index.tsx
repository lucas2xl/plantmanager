import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';

import Button from '../../components/Button';

interface IParams {
  title: string;
  subTitle: string;
  buttonText: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
};

const emojis = {
  hug: '🤗',
  smile: '😄'
}

const Confirmation = ({}) => {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subTitle,
    buttonText,
    icon,
    nextScreen
  } = routes.params as IParams;

  const handleMoveOn = () => {
    navigation.navigate(nextScreen)
  }
  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
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
