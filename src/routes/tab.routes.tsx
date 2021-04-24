import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../styles/Colors';
import PlantSelect from '../screens/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import MyPlants from '../screens/MyPlants';

const TabRouts = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <TabRouts.Navigator
      tabBarOptions={{
        activeTintColor: Colors.green,
        inactiveTintColor: Colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: 20,
          height: 88,
        },
      }}
    >
      <TabRouts.Screen
        name={'Nova Planta'}
        component={PlantSelect}
        options={{
          tabBarIcon: (({size, color}) => (
            <MaterialIcons
              name={"add-circle-outline"}
              size={size}
              color={color}
            />
          ))
        }}  
      />

<TabRouts.Screen
        name={'Minhas Plantas'}
        component={MyPlants}
        options={{
          tabBarIcon: (({size, color}) => (
            <MaterialIcons
              name={"format-list-bulleted"}
              size={size}
              color={color}
            />
          ))
        }}  
      />
    </TabRouts.Navigator>
  );
};

export default AuthRoutes;
