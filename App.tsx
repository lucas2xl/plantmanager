import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notification from 'expo-notifications';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import { IPlantProps } from './src/libs/storage';

import Routes from './src/routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    console.log('passei aqui')
    const subscription = Notification.addNotificationReceivedListener(
      (notification) => {
        const data = notification.request.content.data.plant as IPlantProps;
        console.log(data);
      },
    );
      console.log(subscription)
    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
};

export default App;
