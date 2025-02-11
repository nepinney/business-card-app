/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardTypeOptions } from 'react-native';
import { BusinessCardType, InputFieldValues, SelectionFields } from '../utils/types';

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
  PreviewCard: BusinessCardType;
  ImportCard: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;


// export type RootTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, Screen>,
//   NativeStackScreenProps<RootStackParamList>
// >;
