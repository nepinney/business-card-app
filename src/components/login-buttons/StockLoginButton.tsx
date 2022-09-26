import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

import { Sizing, Colors, Buttons } from '../../styles';

interface Props {
  onPress: () => void;
}

export default function StockLoginButton({ onPress }: Props) {

  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>Begin</Text>
    </ Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    ...Buttons.circular.login,
    width: Sizing.layout.x120,
    backgroundColor: Colors.neutral.s200,
  },
  buttonText: {
    ...Buttons.barText.primary,
  },
})
