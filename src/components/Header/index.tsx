import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Wrapper, Text, Strong, ImageProfile } from './styles';
import userImg from '../../assets/profile.png';

const Header = () => {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    const getUserName = async () => {
      const user = await AsyncStorage.getItem('@plantmanager:user');

      if (!user) {
        return;
      }
      setUserName(user);
    };

    getUserName();
  }, [userName]);

  return (
    <Container>
      <Wrapper>
        <Text>Olá,</Text>
        <Text>
          <Strong>{userName}</Strong>
        </Text>
      </Wrapper>
      <ImageProfile source={userImg} />
    </Container>
  );
};

export default Header;
