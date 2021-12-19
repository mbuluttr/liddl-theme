import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactChild, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Colors, Theme, ThemeTypes } from '../types/ThemeTypes';

interface ThemeContextProps {
  theme: string;
  themeColor: Theme;
  changeTheme: (newColorSet: ThemeTypes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider = ({ children }: { children: ReactChild }) => {
  const [theme, setTheme] = useState('');
  const themeColor = Colors[theme as ThemeTypes];

  useEffect(() => {
    const getStoragedTheme = async () => {
      const storaged = await AsyncStorage.getItem('@theme');
      setTheme(storaged ? storaged : 'light');
    };

    getStoragedTheme();
  }, []);

  const changeStoragedTheme = async (newColorSet: ThemeTypes) => {
    await AsyncStorage.setItem('@theme', newColorSet);
  };

  const changeTheme = useCallback((newColorSet: ThemeTypes) => {
    setTheme(newColorSet);
    changeStoragedTheme(newColorSet);
  }, []);

  const ThemeContextValues = useMemo(
    () => ({
      themeColor,
      theme,
      changeTheme,
    }),
    [themeColor, theme, changeTheme]
  );

  return <ThemeContext.Provider value={ThemeContextValues}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
