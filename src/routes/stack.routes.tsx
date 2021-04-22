import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';

import Welcome from '../screens/Welcome';
import UserIdentification from '../screens/UserIdentification';
import Confirmation from '../screens/Confirmation';
import PlantSelect from '../screens/PlantSelect';

const stackRoutes = createStackNavigator();

const StackRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode={'none'}
    screenOptions={{
      cardStyle: {
        backgroundColor: Colors.white
      },
    }}
  >
    <stackRoutes.Screen
      name={'Welcome'}
      component={Welcome}
    />
    <stackRoutes.Screen
      name={'UserIdentification'}
      component={UserIdentification}
    />
    <stackRoutes.Screen
      name={'Confirmation'}
      component={Confirmation}
    />
    <stackRoutes.Screen
      name={'PlantSelect'}
      component={PlantSelect}
    />
  </stackRoutes.Navigator>
)

export default StackRoutes;
