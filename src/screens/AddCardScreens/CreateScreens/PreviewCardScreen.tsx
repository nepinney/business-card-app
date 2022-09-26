import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import BusinessCard from '../../../components/BusinessCard';
import InputField from '../../../components/InputField';

import { Text, View } from '../../../components/Themed';
import { useAppDispatch } from '../../../hooks/useStore';
import { addCard } from '../../../store/slices/BusinessCardSlice';
import { RootStackScreenProps } from '../../../navigation/types';

export default function PreviewCard({ route, navigation }: RootStackScreenProps<'PreviewCard'>) {

  const dispatch = useAppDispatch();

  const card = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text>PREVIEW CARD</Text>
      </View>

      <BusinessCard card={card} />

      {/* <View style={styles.cardContainer}>
        <Text style={styles.buttonText}>[PREVIEW CARD]</Text>
      </View> */}
      <Pressable style={styles.buttonContainer} onPress={() => {
        dispatch(addCard(route.params))
        navigation.navigate('Home')
      }}>
        <Text style={styles.buttonText}>CONFIRM</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    height: 200,
    width: '85%',
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 60,
    marginTop: 30,
    width: '30%',
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 17,
  }
});