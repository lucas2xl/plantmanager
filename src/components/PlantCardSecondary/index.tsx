import React from 'react';
import {
  Button,
  Title,
  Details,
  TimeLabel,
  Time,
  ViewAnimated,
  ButtonRemove,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import Colors from '../../styles/Colors';

interface IPlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}
const PlantCardSecondary: React.FC<IPlantProps> = ({
  data,
  handleRemove,
  ...rest
}) => {
  const timeLabel = 'Regas às';
  Feather;
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <ViewAnimated as={Animated.View}>
          <ButtonRemove 
            onPress={handleRemove}
            activeOpacity={0}
          >
            <Feather name={'trash'} size={32} color={Colors.white} />
          </ButtonRemove>
        </ViewAnimated>
      )}>
      <Button {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Title>{data.name}</Title>
        <Details>
          <TimeLabel>{timeLabel}</TimeLabel>
          <Time>{data.hour}</Time>
        </Details>
      </Button>
    </Swipeable>
  );
};

export default PlantCardSecondary;
