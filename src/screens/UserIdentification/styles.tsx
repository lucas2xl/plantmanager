import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface IInputProps extends TextInputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const View = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${Colors.heading};
  font-family: ${Fonts.heading};
  line-height: 32px;
  margin-top: 24px;
`;

export const Input = styled.TextInput<IInputProps>`
  border-bottom-width: 2px;
  border-color: ${(props) =>
    props.isFocused || props.isFilled ? Colors.green : Colors.gray};
  color: ${Colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 20px;
`;
