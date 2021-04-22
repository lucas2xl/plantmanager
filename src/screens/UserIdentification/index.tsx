import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/core';
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
import { Platform } from 'react-native';

const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  const title = 'Como podemos\nchamar você?';
  const buttonText = 'Confirmar';
  const placeholder = 'Digite um nome';

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

  const handleConfirmation = () => {
    navigation.navigate('Confirmation');
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
              <Button title={buttonText} onPress={handleConfirmation} />
            </Footer>
          </Form>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default UserIdentification;
