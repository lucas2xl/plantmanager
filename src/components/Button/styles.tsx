import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';


export const Touchable = styled(({...rest})=> <TouchableOpacity {...rest}/>)`
  background-color: ${Colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${Colors.white};
  font-family: ${Fonts.heading};
`;
