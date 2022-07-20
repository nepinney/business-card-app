/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardTypeOptions } from 'react-native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  AddCard: undefined;
  SelectFields: undefined;
  FillFields: SelectionFields;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type User = {
  email: string;
  firstName: string;
  lastName: string;
}

export type BusinessCard = {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  website: string;
}

type Field = {
  isWanted: boolean;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
}

export type SelectionFields = {
  [key: string]: Field
}

export type InputFieldValues = {
  [key: string]: string;
}

// export type RootTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, Screen>,
//   NativeStackScreenProps<RootStackParamList>
// >;
