import React, { useState } from 'react';
import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';

import Button from '../../components/Button';
import { Platform } from 'react-native';

const Confirmation = () => {
  const title = 'Prontinho';
  const subTitle =
    ' Agora vamos começar a cuidar das suas plantinhas com muito cuidado.';
  const buttonText = 'Começar';

  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Footer>
          <Button title={buttonText} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
