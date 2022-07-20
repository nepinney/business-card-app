import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import TextStyles from '../../constants/theme/Text';
import { useAppDispatch } from '../../hooks/useStore';
import { RootStackScreenProps } from '../../types';
import { useLocalStorage } from '../../store/slices/AuthenticationSlice';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {

  const dispatch = useAppDispatch();

  const setLocalStorage = () => {
    dispatch(useLocalStorage());
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={TextStyles.header}>Profile Cards</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={TextStyles.helper}>Save on local device</Text>
        <Pressable style={styles.buttonContainer} onPress={() => setLocalStorage()}>
          <Text style={styles.googleButtonText}>Begin</Text>
        </Pressable>

        <Text style={[TextStyles.helper, styles.space]}>Backup app data using third party authentication</Text>
        <Pressable style={[styles.buttonContainer, styles.googleButtonContainer, styles.smallSpace]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.googleButtonText}>Google</Text>
        </Pressable>
        <Pressable style={[styles.buttonContainer, styles.appleButtonContainer, styles.smallSpace]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.googleButtonText}>Apple</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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