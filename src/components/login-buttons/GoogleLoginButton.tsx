import React, { useEffect, useState } from 'react';
import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';

import { Sizing, Colors, Typography, Buttons, Outlines } from '../../styles';

export default function GoogleLoginButton() {
  const colorScheme = useColorScheme();

  return (
    <Pressable style={styles.buttonContainer} onPress={() => { }}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/google-logo.png')} style={styles.image} />
      </View>
      <Text style={styles.buttonText}>Sign in with Google</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    ...Buttons.circular.login,
    backgroundColor: Colors.thirdParty.google,
    flexDirection: 'row',
    justifyContent: undefined,
    paddingLeft: Sizing.x20,
  },
  imageContainer: {
    backgroundColor: Colors.neutral.white,
    width: Sizing.x50,
    height: Sizing.x50,
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
