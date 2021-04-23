import React from 'react';
import styled from 'styled-components/native';
import { RectButton} from 'react-native-gesture-handler';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';


export const Button = styled(({...rest}) => <RectButton {...rest}/>)`
  flex: 1;
  max-width: 45%;
  background-color: ${Colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
`;


export const Text = styled.Text`
  font-family: ${Fonts.heading};
  color: ${Colors.green_dark};
  margin: 16px 0; 
`;
