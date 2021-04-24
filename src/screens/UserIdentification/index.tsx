import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  KeyboardAvoidingView,
  Form,
  View,
  Emoji,
  Title,
  Input,
  Footer,
} from './styles';

import Button from '../../components/Button';

const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  const title = 'Como podemos\nchamar você?';
  const buttonText = 'Confirmar';
  const placeholder = 'Digite um nome';
  const alert = 'Não foi possivel salvar o nome do usuário 😢';

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  const handleSubmit = async() => {
    if(!name){
      return;
    }
    
    try{
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subTitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonText: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });

    }catch {
      Alert.alert(alert)
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Form>
            <View>
              <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
              <Title>{title}</Title>
            </View>
            <Input
              isFocused={isFocused}
              isFilled={isFilled}
              placeholder={placeholder}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
              value={name}
            />
            <Footer>
              <Button
                title={buttonText}
                onPress={handleSubmit}
                isDisabled={!name}
                disabled={!name}
              />
            </Footer>
          </Form>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default UserIdentification;
