import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const styles = StyleSheet.create({
  scrollView:{
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: Colors.shape,
  }
})

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: ${Colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.shape};
`;

export const PlantName = styled.Text`
  font-family: ${Fonts.heading};
  font-size: 24px;
  color: ${Colors.heading};
  margin-top: 15px;
`;

export const AboutPlant = styled.Text`
  text-align: center;
  font-family: ${Fonts.text};
  color: ${Colors.heading};
  font-size: 17px;
  margin-top: 10px;
`;

export const Controller = styled.View`
  padding: 20px 20px ${`${getBottomSpace() || 20}px`} 20px;
  background-color: ${Colors.white};
`;

export const TipController = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${Fonts.text};
  color: ${Colors.blue};
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  margin-bottom: 5px;
  font-family: ${Fonts.complement};
  color: ${Colors.heading};
  font-size: 14px;
  text-align: center;
`;

export const DateTimerPickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const DateTimerPickerText = styled.Text`
  color: ${Colors.heading};
  font-size: 24px;
  font-family: ${Fonts.text};
`;
