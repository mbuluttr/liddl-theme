import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { AppStackParamList } from '../types/NavigationTypes';
import { StatusBar } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  const { theme, themeColor } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={themeColor.background}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigator;
