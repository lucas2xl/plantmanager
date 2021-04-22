import React from 'react';
import { Container, Wrapper, Text, Strong , ImageProfile } from './styles';
import userImg from '../../assets/profile.png';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Olá,</Text>
        <Text><Strong>Lucas</Strong></Text>
      </Wrapper>
      <ImageProfile source={userImg}/>
    </Container>
  );
};

export default Header;
