import React from 'react';
import { Pressable, StyleSheet, Modal, ScrollView } from 'react-native';

import { View, Text } from './Themed';

interface Props {
  isVisible: boolean;
  onColorSelected: (color: string) => void;
  closeModal: () => void;
}

export default function ColorPicker({ isVisible, onColorSelected, closeModal }: Props) {

  const colors = [
    '#ce80ca',
    '#1dc428',
    '#10e5cc',
    '#c941db',
    '#f74aac',
    '#1ee832',
  ]

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      // transparent={true}
      transparent={true}
    >
      <View style={styles.modalContentContainer}>
        <ScrollView>

          <View style={styles.headerContainer}>
            <Pressable style={styles.closeButton} onPress={() => { closeModal() }}>
              <Text>Close</Text>
            </Pressable>
          </View>

          {colors.map((color) => (
            <Pressable style={[styles.colorContainer, { backgroundColor: color }]} key={color} onPress={() => { onColorSelected(color) }}>
              <Text>{color.toUpperCase()}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    maxHeight: 300,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  colorContainer: {
    height: 80,
    marginHorizontal: 30,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  closeButton: {
    width: 60,
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 15,
  },
  modalContentContainer: {
    height: '60%',
    marginTop: 'auto',
    backgroundColor: 'white',
    borderRadius: 30,
  }
})