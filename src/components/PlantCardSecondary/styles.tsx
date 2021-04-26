import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Button = styled(({ ...rest }) => <RectButton {...rest} />)`
  width: 100%;
  background-color: ${Colors.shape};
  border-radius: 20px;
  padding: 25px 10px;
  align-items: center;
  border-radius: 20px;
  flex-direction: row;
  margin: 5px 0;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 17px;
  font-family: ${Fonts.heading};
  margin-left: 10px;
  color: ${Colors.heading};
`;
export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.text};
  color: ${Colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${Fonts.heading};
  color: ${Colors.body_dark};
`;

// Swipeble

export const ViewAnimated = styled.View`
  justify-content: center;
  align-items: center;
  width: 40%;
  border-radius: 20px;
  background-color: ${Colors.red};
  height: 100px;
  margin-top: 5px;
`;

export const ButtonRemove = styled(({ ...rest }) => <RectButton {...rest} />)`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
