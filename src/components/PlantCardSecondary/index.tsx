import React from 'react';
import { Button, Title, Details, TimeLabel, Time } from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

interface IPlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour?: string;
  };
}
const PlantCardSecondary: React.FC<IPlantProps> = ({ data, ...rest }) => {
  const timeLabel = 'Regas às';
  return (
    <Button {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <Title>{data.name}</Title>
      <Details>
        <TimeLabel>{timeLabel}</TimeLabel>
        <Time>{data.hour}</Time>
      </Details>
    </Button>
  );
};

export default PlantCardSecondary;
