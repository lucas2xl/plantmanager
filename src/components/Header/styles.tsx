import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${`${getStatusBarHeight()}px`};
`;

export const Wrapper = styled.View`
  
`;

export const Text = styled.Text`
  font-size: 32px;
  color: ${Colors.heading};
  font-family: ${Fonts.text};
`;

export const Strong = styled.Text`
  font-family: ${Fonts.heading};
  line-height: 34px;
`; 

export const ImageProfile = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px; 
`;