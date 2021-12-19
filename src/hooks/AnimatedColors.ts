import { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import { useTheme } from '../contexts/ThemeContext';
import { Colors } from '../types/ThemeTypes';

export const useAnimatedColors = () => {
  const { theme } = useTheme();

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);

  const animatedContainerColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progress.value, [0, 1], [Colors.light.background, Colors.dark.background]);

    return {
      backgroundColor: backgroundColor,
    };
  });

  const animatedTextColor = useAnimatedStyle(() => {
    const textColor = interpolateColor(progress.value, [0, 1], [Colors.light.text, Colors.dark.text]);
    return {
      color: textColor,
    };
  });

  const animatedSubtitleColor = useAnimatedStyle(() => {
    const textColor = interpolateColor(progress.value, [0, 1], [Colors.light.subtitle, Colors.dark.subtitle]);
    return {
      color: textColor,
    };
  });

  return { animatedContainerColor, animatedTextColor, animatedSubtitleColor };
};
