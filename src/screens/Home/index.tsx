import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';
import { AppStackProps } from '../../types/NavigationTypes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

const Home = ({ navigation }: AppStackProps) => {
  const { themeColor } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColor.background }]}>
      <View style={styles.header}>
        <Text style={[styles.text, { color: themeColor.text }]}>Welcome</Text>
        <TouchableOpacity
          style={[styles.iconSquareBackground, { backgroundColor: themeColor.item_bg }]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="ios-settings" size={24} color={themeColor.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Image source={require('../../assets/img/hello.png')} resizeMode="contain" style={styles.hello} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
