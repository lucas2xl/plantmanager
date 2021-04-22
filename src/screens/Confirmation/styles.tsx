import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const Emoji = styled.Text`
  font-size: 96px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${Colors.heading};
  font-family: ${Fonts.heading};
  line-height: 32px;
  margin-top: 30px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 10px;
  font-family: ${Fonts.text};
  color: ${Colors.heading};
  margin-top: 16px;
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 50px;
`;
