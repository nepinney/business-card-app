import React from 'react';
import { Platform, Pressable, Share, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { clearCards } from '../store/slices/BusinessCardSlice';
import { RootStackScreenProps } from '../navigation/types';
// import { addToAndroidWallet, addToIosWallet } from '../utils/WalletFunctions';

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {

  const { cards } = useAppSelector(state => state.businessCards);

  const dispatch = useAppDispatch();

  const addNewCard = () => {
    navigation.navigate('AddCard');
  }

  // const addToWallet = () => {
  //   switch (Platform.OS) {
  //     case 'ios':
  //       addToIosWallet();
  //       break;
  //     case 'android':
  //       addToAndroidWallet();
  //       break;
  //     default:
  //       console.log('Unsupported platform');
  //       break;
  //   }
  // }

  const shareCard = () => {
  }

  return (
    <>
      {cards.length == 0 ? (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Pressable style={styles.buttonContainer} onPress={() => addNewCard()}>
              <Text style={styles.buttonText}>ADD NEW CARD</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        cards.length > 1 ? (
          <View style={styles.noCenterContainer}>
            {cards.map(card => {
              return (
                <View style={styles.cardContainer} key={card.name}>
                  <Text style={styles.buttonText}>{JSON.stringify(card)}</Text>
                </View>
              )
            })}
            <View style={styles.footerContainer}>
              <Pressable style={styles.clearButtonContainer} onPress={() => dispatch(clearCards())}>
                <Text style={styles.clearButtonText}>CLEAR CARDS</Text>
              </Pressable>
              <Pressable style={styles.clearButtonContainer} onPress={() => addNewCard()}>
                <Text style={styles.clearButtonText}>ADD NEW CARD</Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={styles.noCenterContainer}>
            {cards.map(card => {
              return (
                <View style={styles.cardContainer} key={card.id}>
                  <Text style={styles.buttonText}>{JSON.stringify(card)}</Text>
                </View>
              )
            })}
            <View style={styles.row}>
              <Pressable style={styles.walletButtonContainer} onPress={() => { }}>
                <Text style={styles.clearButtonText}>ADD TO {Platform.OS == 'ios' ? 'APPLE' : 'GOOGLE'} WALLET</Text>
              </Pressable>

              <Pressable style={styles.shareButtonContainer} onPress={() => shareCard()}>
                <Text style={styles.clearButtonText}>SHARE</Text>
              </Pressable>
            </View>
            <View style={styles.footerContainer}>
              <Pressable style={styles.clearButtonContainer} onPress={() => dispatch(clearCards())}>
                <Text style={styles.clearButtonText}>CLEAR CARDS</Text>
              </Pressable>
              <Pressable style={styles.clearButtonContainer} onPress={() => addNewCard()}>
                <Text style={styles.clearButtonText}>ADD NEW CARD</Text>
              </Pressable>
            </View>
          </View>
        )
      )}
      {/* <Text style={styles.title}>Home Screen</Text> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noCenterContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    height: 225,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
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
  clearButtonContainer: {
    height: 60,
    width: 250,
    // marginTop: 30,
    // width: '100%',
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  walletButtonContainer: {
    height: 60,
    // width: 250,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  shareButtonContainer: {
    height: 60,
    // width: 250,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButtonText: {
    fontSize: 17,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})