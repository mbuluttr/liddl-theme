import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import { useTheme } from '../../contexts/ThemeContext';
import { AppStackProps } from '../../types/NavigationTypes';
import { Colors } from '../../types/ThemeTypes';
import { SafeAreaView } from 'react-native-safe-area-context';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

const Settings = ({ navigation }: AppStackProps) => {
  const { theme, themeColor, changeTheme } = useTheme();

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

  return (
    <AnimatedSafeAreaView style={[styles.container, animatedContainerColor]}>
      <View style={styles.pageHeader}>
        <TouchableOpacity style={styles.pageHeaderBack} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="chevron-back" size={34} color={themeColor.text} style={styles.pageHeaderBackIcon} />
        </TouchableOpacity>
        <Animated.Text style={[styles.pageHeaderText, animatedTextColor]}>Settings</Animated.Text>
      </View>

      <Animated.Text style={[styles.pageSubtitleText, animatedTextColor]}>Account</Animated.Text>
      <View style={styles.userDetailsContainer}>
        <View style={[styles.iconCircleBackground, { backgroundColor: themeColor.item_bg }]}>
          <Ionicons name="person" size={24} color={themeColor.item_inner} />
        </View>
        <View style={styles.userInfo}>
          <Animated.Text style={[styles.usernameText, animatedTextColor]}>Mustafa Bulut</Animated.Text>
          <Animated.Text style={[styles.userSubtitleText, animatedSubtitleColor]}>React Native Developer</Animated.Text>
        </View>
        <View style={[styles.iconSquareBackground, { backgroundColor: themeColor.item_bg }]}>
          <Ionicons name="chevron-forward" size={24} color={themeColor.item_inner} />
        </View>
      </View>

      <Animated.Text style={[styles.pageSubtitleText, animatedTextColor]}>Settings</Animated.Text>
      <View style={styles.item}>
        <View style={[styles.iconCircleBackground, { backgroundColor: themeColor.icon1_bg }]}>
          <Ionicons name="earth" size={24} color={themeColor.icon1_inner} />
        </View>
        <Animated.Text style={[styles.itemTitleText, animatedTextColor]}>Language</Animated.Text>
        <View style={[styles.iconSquareBackground, { backgroundColor: themeColor.item_bg }]}>
          <Ionicons name="chevron-forward" size={24} color={themeColor.item_inner} />
        </View>
      </View>

      <View style={styles.item}>
        <View style={[styles.iconCircleBackground, { backgroundColor: themeColor.icon2_bg }]}>
          <Ionicons name="notifications" size={24} color={themeColor.icon2_inner} />
        </View>
        <Animated.Text style={[styles.itemTitleText, animatedTextColor]}>Notifications</Animated.Text>
        <View style={[styles.iconSquareBackground, { backgroundColor: themeColor.item_bg }]}>
          <Ionicons name="chevron-forward" size={24} color={themeColor.item_inner} />
        </View>
      </View>

      <View style={styles.item}>
        <Animated.Text style={[styles.itemTitleText, styles.darkMode, animatedTextColor]}>
          {theme === 'dark' ? 'On' : 'Off'}
        </Animated.Text>
        <View style={[styles.iconCircleBackground, { backgroundColor: themeColor.icon3_bg }]}>
          <Ionicons name="moon" size={24} color={themeColor.icon3_inner} />
        </View>
        <Animated.Text style={[styles.itemTitleText, animatedTextColor]}>Dark Mode</Animated.Text>
        <View style={[styles.iconSquareBackground, { backgroundColor: themeColor.item_bg }]}>
          <TouchableOpacity onPress={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Ionicons
              name={theme === 'dark' ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={themeColor.item_inner}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.item}>
        <View style={[styles.iconCircleBackground, { backgroundColor: themeColor.icon4_bg }]}>
          <Ionicons name="help-buoy" size={24} color={themeColor.icon4_inner} />
        </View>
        <Animated.Text style={[styles.itemTitleText, animatedTextColor]}>Help</Animated.Text>
        <View style={[styles.iconSquareBackground, { backgroundColor: themeColor.item_bg }]}>
          <Ionicons name="chevron-forward" size={24} color={themeColor.item_inner} />
        </View>
      </View>
    </AnimatedSafeAreaView>
  );
};

export default Settings;
