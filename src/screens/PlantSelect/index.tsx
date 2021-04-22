import React from 'react';
import {
  SafeAreaView,
  Wrapper,
  TitleStrong,
  Title,
  WrapperFlatList,
  FlatListHorizontal,
} from './styles';

import Header from '../../components/Header';
import EnvironmentButton from '../../components/EnvironmentButton';

const PlantSelect = () => {
  const titleStrong = 'Em qual hambiente';
  const title = 'você quer colocar sua planta?';
  return (
    <SafeAreaView>
      <Wrapper>
        <Header />
        <TitleStrong>{titleStrong}</TitleStrong>
        <Title>{title}</Title>
      </Wrapper>
      <WrapperFlatList>
        <FlatListHorizontal
          data={[1, 2, 3, 4, 5]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <EnvironmentButton title={'Cozinha'} active />
          )}
        />
      </WrapperFlatList>
    </SafeAreaView>
  );
};

export default PlantSelect;
