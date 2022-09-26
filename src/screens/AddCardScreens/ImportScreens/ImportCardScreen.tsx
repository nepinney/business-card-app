import React from 'react';
import { Alert, Pressable, StyleSheet, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import { RootStackScreenProps } from '../../../navigation/types';
import { Text, View } from '../../../components/Themed';
import { useAppDispatch } from '../../../hooks/useStore';
import { addCard } from '../../../store/slices/BusinessCardSlice';

export default function ImportCardScreen({ navigation }: RootStackScreenProps<'ImportCard'>) {

  const dispatch = useAppDispatch();

  const [file, setFile] = React.useState<string | undefined>(undefined);

  const chooseFile = async () => {
    const docParams: DocumentPicker.DocumentPickerOptions = {}

    try {
      const doc: DocumentPicker.DocumentResult = await DocumentPicker.getDocumentAsync(docParams)
      if (doc.type === 'success') {
        if (!doc.mimeType?.includes("image")) {
          throw new Error("Please choose a valid image file")
        }
        setFile(doc.uri)
      }
      console.log(doc)
    } catch (e) {
      Alert.alert("Error", e.message)
    }
  }

  const dispatchAddCard = () => {
    dispatch(addCard(file))
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: file }} style={styles.image} />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={[styles.buttonContainer, { marginBottom: 20 }]} onPress={() => chooseFile()}>
          <Text style={styles.buttonText}>CHOOSE FILE</Text>
        </Pressable>
        <Pressable style={[styles.buttonContainer, file ? {} : {opacity: 0.5}]} onPress={() => dispatchAddCard()} disabled={file ? false : true}>
          <Text style={styles.buttonText}>ADD CARD</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardContainer: {
    height: 200,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 50,
    width: '50%',
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
});