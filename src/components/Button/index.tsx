import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Touchable, Text } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title?: string;
}

const Button:React.FC<IButtonProps> = ({ title, ...rest}) => {
  return (
    <Touchable activeOpacity={0.8} {...rest}>
      <Text>{title}</Text>
    </Touchable>
  );
};

export default Button;
