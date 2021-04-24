import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Touchable, Text } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title?: string;
  isDisabled?: boolean;
}

const Button:React.FC<IButtonProps> = ({ title, isDisabled=false, ...rest}:IButtonProps) => {
  return (
    <Touchable
      activeOpacity={0.8}
      isDisabled={isDisabled}
      {...rest}
    >
      <Text>{title}</Text>
    </Touchable>
  );
};

export default Button;
