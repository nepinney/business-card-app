import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "./Themed";

interface SelectFieldProps {
  isSelected: boolean;
  setIsSelected: () => void;
  label: string;
}

export default function CustomSelect(props: SelectFieldProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonContainer} onPress={() => props.setIsSelected()}>
        <View style={styles.checkBoxContainer}>
          {props.isSelected ? (
            <Text style={styles.check}>X</Text>
          ) : (
            null
          )}
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{props.label}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  checkBoxContainer: {
    width: 30,
    height: '100%',
    borderColor: '#707070',
    borderWidth: 1,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelContainer: {
    flex: 1,
    height: '100%',
    // width: '100%',
    borderColor: '#707070',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  labelText: {
    fontSize: 17,
  },
  check: {
    fontSize: 17,
  }
});