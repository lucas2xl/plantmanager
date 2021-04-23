import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  animation:{
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
  }
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;