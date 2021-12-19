import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from './src/contexts/ThemeContext';
import AppStackNavigator from './src/routers/AppStackNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppStackNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
