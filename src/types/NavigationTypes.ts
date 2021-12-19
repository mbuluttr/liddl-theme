import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export type AppStackProps = NativeStackScreenProps<AppStackParamList, 'Home'>;
