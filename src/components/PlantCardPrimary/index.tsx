import React from 'react';
import { Button, Text } from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

interface IPlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}
const PlantCardPrimary: React.FC<IPlantProps> = ({ data, ...rest }) => {
  return (
    <Button {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text>{data.name}</Text>
    </Button>
  );
};

export default PlantCardPrimary;
