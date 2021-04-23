import React from 'react';
import { Container, styles } from './styles';

import LottieView from 'lottie-react-native';
import loadAnimation from '../../assets/load.json';

const Load = () => {
  return(
    <Container>
      <LottieView 
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </Container>
  )
};

export default Load;
