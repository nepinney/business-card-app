/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/theme/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList } from './types';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from '../screens/AuthenticationScreens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { useAppSelector } from '../hooks/useStore';
import AddCardScreen from '../screens/AddCardScreens/AddCardScreen';
import SelectFields from '../screens/AddCardScreens/CreateScreens/SelectFieldsScreen';
import FillFields from '../screens/AddCardScreens/CreateScreens/FillFieldsScreen';
import PreviewCard from '../screens/AddCardScreens/CreateScreens/PreviewCardScreen';
import ImportCardScreen from '../screens/AddCardScreens/ImportScreens/ImportCardScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  const { isAuthenticated, usingLocalStorage } = useAppSelector(state => state.authentication);

  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator initialRouteName="Login">
      {usingLocalStorage == true || (isAuthenticated && !usingLocalStorage) ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true, headerBackVisible: false, }} />
          <Stack.Screen name="AddCard" component={AddCardScreen} options={{ title: "Add Card" }} />
          <Stack.Screen name="SelectFields" component={SelectFields} options={{ title: "Select Fields" }} />
          <Stack.Screen name="FillFields" component={FillFields} options={{ title: "Fill Fields" }} />
          <Stack.Screen name="PreviewCard" component={PreviewCard} options={{ title: "Card Preview" }} />
          <Stack.Screen name="ImportCard" component={ImportCardScreen} options={{ title: "Import Card" }} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}>
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneScreen}
//         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Pressable
//               onPress={() => navigation.navigate('Modal')}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}>
//               <FontAwesome
//                 name="info-circle"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoScreen}
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
