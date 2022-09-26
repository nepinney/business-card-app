import React from 'react';
import { StyleSheet, Pressable, Image, View, Text } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';

import { Sizing, Colors, Typography, Buttons, Outlines } from '../../styles';

export default function AppleLoginButton() {
  const colorScheme = useColorScheme();

  const appleLogo = colorScheme === 'dark' ? require('../../assets/images/apple-logo-black.png') : require('../../assets/images/apple-logo-white.png');

  return (
    <Pressable style={[styles.buttonContainer, colorScheme === 'dark' ? { backgroundColor: Colors.neutral.white } : { backgroundColor: Colors.neutral.black }]}>
      <View style={styles.imageContainer}>
        <Image source={appleLogo} style={styles.image} />
      </View>
      <Text style={[styles.buttonText, colorScheme === 'dark' ? { color: Colors.neutral.black } : { color: Colors.neutral.white }]}>Sign in with Apple</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    ...Buttons.circular.login,
    backgroundColor: Colors.thirdParty.apple,
    flexDirection: 'row',
    justifyContent: undefined,
    paddingLeft: Sizing.x20,
  },
  imageContainer: {
    backgroundColor: 'transparent',
    width: Sizing.x50,
    height: Sizing.x50,
    paddingBottom: Sizing.x5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Outlines.borderRadius.max,
  },
  image: {
    width: Sizing.x40,
    height: Sizing.x40,
  },
  buttonText: {
    ...Buttons.barText.primary,
    color: Colors.neutral.white,
    marginLeft: Sizing.x20,
  },
})
