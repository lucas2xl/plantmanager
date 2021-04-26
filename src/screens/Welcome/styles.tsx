import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const width = Dimensions.get('window').width;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
 flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: ${Colors.heading};
  font-size: 28px;
  text-align: center;
  margin-top: 38px;
  font-family: ${Fonts.heading};
  line-height: 34px;
`;

export const Image = styled.Image`
  height: ${`${width * 0.7}px`};
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${Colors.heading};
  font-family: ${Fonts.text};
`;

export const Touchable = styled.TouchableOpacity`
  background-color: ${Colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;
