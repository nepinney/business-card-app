/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import * as colors from '../styles/colors';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];

export function Text(props: TextProps) {
  const colorScheme = useColorScheme();

  const { style, ...otherProps } = props;
  const color = colorScheme  === 'dark' ? colors.neutral.white : colors.neutral.black;
  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const colorScheme = useColorScheme();
  const { style, ...otherProps } = props;
  const backgroundColor = colorScheme  === 'dark' ? colors.neutral.black : colors.neutral.white;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
