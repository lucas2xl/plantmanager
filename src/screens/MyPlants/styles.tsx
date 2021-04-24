import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
});
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0 30px;
  background-color: ${Colors.white}
`;

export const SpotLight = styled.View`
  background-color: ${Colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
`;

export const SpotLightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  color: ${Colors.blue};
  padding: 0 20px;
`;

export const Plants = styled.View`
  flex: 1;
  margin-top: 10px;
  width: 100%;
`;

export const PlantsText = styled.Text`
  font-size: 24px;
  font-family: ${Fonts.heading};
  color: ${Colors.heading};
  margin: 20px 0;
`;
