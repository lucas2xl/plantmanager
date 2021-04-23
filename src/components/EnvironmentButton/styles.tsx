import React from 'react';
import styled from 'styled-components/native';
import { RectButton} from 'react-native-gesture-handler';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface IButtonProps{
  isActive: boolean;
}
export const Button = styled(({isActive, ...rest}) => <RectButton {...rest}/>)`
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({isActive}) => isActive ? Colors.green_light : Colors.shape};
  margin: 0px 5px;
`;


export const Text = styled.Text<IButtonProps>`
  font-size: 16px;
  font-family: ${({isActive}) => isActive ? Fonts.heading : Fonts.text};
  color: ${({isActive}) => isActive ? Colors.green_dark : Colors.heading};
`;
