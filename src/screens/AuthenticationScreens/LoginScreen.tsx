import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import AppleLoginButton from '../../components/login-buttons/AppleLoginButton';
import GoogleLoginButton from '../../components/login-buttons/GoogleLoginButton';
import StockLoginButton from '../../components/login-buttons/StockLoginButton';

import { Text, View as ThemedView } from '../../components/Themed';
import { useAppDispatch } from '../../hooks/useStore';
import { RootStackScreenProps } from '../../navigation/types';
import { useLocalStorage } from '../../store/slices/AuthenticationSlice';

import { Typography, Sizing } from '../../styles';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {

  const dispatch = useAppDispatch();

  const setLocalStorage = () => {
    dispatch(useLocalStorage());
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.topContainer}>
        <Text style={styles.title}>Profile Cards</Text>
      </ThemedView>

      <ThemedView style={styles.bottomContainer}>
        <Text style={styles.helperText}>Save on local device</Text>
        <StockLoginButton onPress={() => setLocalStorage()} />

        <Text style={[styles.helperText, styles.space]}>Backup app data using third party authentication</Text>
        <GoogleLoginButton />
        {/* <Pressable style={[styles.buttonContainer, styles.googleButtonContainer, styles.smallSpace]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.googleButtonText}>Google</Text>
        </Pressable> */}
        <View style={{ height: Sizing.layout.x20 }}></View>
        <AppleLoginButton />
        {/* <Pressable style={[styles.buttonContainer, styles.appleButtonContainer, styles.smallSpace]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.googleButtonText}>Apple</Text>
        </Pressable> */}
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...Typography.bold.x70,
  },
  helperText: {
    ...Typography.regular.x30,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '48%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  googleButtonContainer: {
    backgroundColor: 'blue',
  },
  appleButtonContainer: {
    backgroundColor: 'black',
  },
  googleButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  space: {
    marginTop: 40,
  },
  smallSpace: {
    marginTop: 15,
  },
})