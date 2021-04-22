import styled, { css } from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const SafeAreaView = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const Wrapper = styled.View`
  padding: 0 30px;
`;

export const TitleStrong = styled.Text`
  font-size: 18px;
  color: ${Colors.heading};
  font-family: ${Fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;
export const Title = styled.Text`
  font-size: 18px;
  line-height: 20px;
  font-family: ${Fonts.text};
  color: ${Colors.heading};
`;
export const WrapperFlatList = styled.View``;

export const FlatListHorizontal = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 22,
    marginVertical: 32,
  },
}))``;
