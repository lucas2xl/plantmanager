import React from 'react';
import { Button, Text } from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

interface IEnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}
const EnvironmentButton: React.FC<IEnvironmentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <Button isActive={active} {...rest}>
      <Text isActive={active}>{title}</Text>
    </Button>
  );
};

export default EnvironmentButton;
