import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { RootStackScreenProps } from '../../navigation/types';
import { Text, View } from '../../components/Themed';

export default function AddCardScreen({ navigation }: RootStackScreenProps<'AddCard'>) {

  const createCard = () => {
    navigation.navigate('SelectFields');
  }

  const importCard = () => {
    navigation.navigate('ImportCard');
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Pressable style={styles.buttonContainer} onPress={() => importCard()}>
          <Text style={styles.buttonText}>IMPORT</Text>
        </Pressable>
        <View style={styles.helperTextContainer}>
          <Text style={styles.cardText}>OR</Text>
        </View>
        <Pressable style={styles.buttonContainer} onPress={() => createCard()}>
          <Text style={styles.buttonText}>CREATE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    height: 200,
    width: '85%',
    borderRadius: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 50,
    width: '50%',
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  cardText: {
    fontSize: 20,
    color: 'black',
  },
  helperTextContainer: {
    backgroundColor: 'transparent',
    marginVertical: 10,
  },
});