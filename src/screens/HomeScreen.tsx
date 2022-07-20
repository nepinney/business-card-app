import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useAppSelector } from '../hooks/useStore';
import { RootStackScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {

  const { cards } = useAppSelector(state => state.businessCards);

  const addNewCard = () => {
    navigation.navigate('AddCard');
  }

  return (
    <View style={styles.container}>
      {cards.length == 0 ? (
        <View style={styles.cardContainer}>
          <Pressable style={styles.buttonContainer} onPress={() => addNewCard()}>
            <Text style={styles.buttonText}>ADD NEW CARD</Text>
          </Pressable>
        </View>
      ) : (
        <View>
        </View>
      )}
      {/* <Text style={styles.title}>Home Screen</Text> */}
    </View>
  )
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
  }
})