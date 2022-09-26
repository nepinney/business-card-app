import React from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet } from 'react-native';
import ColorPicker from '../../../components/ColorPicker';
import InputField from '../../../components/InputField';

import { Text, View } from '../../../components/Themed';
import { RootStackScreenProps } from '../../../navigation/types';
import { BusinessCardType, InputFieldValues } from '../../../utils/types';

export default function FillFields({ route, navigation }: RootStackScreenProps<'FillFields'>) {

  let keys = Object.keys(route.params)
  const inputFieldValues: InputFieldValues = {}

  keys.forEach(key => {
    if (route.params[key]) {
      inputFieldValues[key] = ''
    }
  });

  type FieldError = {
    [key: string]: boolean
  }

  const [inputText, setInputText] = React.useState<InputFieldValues>(inputFieldValues);
  const [error, setError] = React.useState<FieldError>({});
  const [isColorPickerOpen, setIsColorPickerOpen] = React.useState<boolean>(false);
  const [selectedColor, setSelectedColor] = React.useState<string>('#16ba2e');

  const prepareFields = (allFields: InputFieldValues): InputFieldValues => {
    let filledFields = {} as InputFieldValues
    Object.keys(allFields).forEach(key => {
      if (allFields[key] !== '') {
        filledFields[key] = allFields[key]
      }
    })
    return filledFields
  }

  const nextScreen = () => {
    const skipCheckFields = true
    if (skipCheckFields || Object.values(inputText).every(value => value !== '')) {
      let filledFields = prepareFields(inputText)
      // console.log('Filled fields: ', filledFields)
      navigation.navigate('PreviewCard', {info: filledFields, config: {color: selectedColor}} as BusinessCardType);
    }
    else {
      let errors: FieldError = {}
      Object.keys(inputText).forEach(key => {
        if (inputText[key] == '') {
          errors[key] = true
        }
      })
      setError(errors)
    }
  }

  React.useEffect(() => {
    // console.log('mounting', route.params)
    return () => {
      setInputText({})
    }
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}>

        <View style={styles.headerContainer}>
          <Text>FILL IN INFO</Text>
        </View>

        <View>
          {keys.map((key, index) => {
            if (route.params[key].isWanted) {
              const isLast = index === keys.length - 1
              return (
                <InputField
                  inputText={inputText[key]}
                  setInputText={(text) => {
                    setInputText({ ...inputText, [key]: text })
                  }}
                  placeholder={route.params[key].placeholder}
                  key={key}
                  keyboardType={route.params[key].keyboardType}
                  redHighlight={error[key]}
                  isLast={isLast}
                />
              )
            }
          })}
        </View>

        <View style={styles.headerContainer}>
          <Text>CHOOSE BACKGROUND COLOR</Text>
        </View>

        <Pressable style={styles.colorFieldContainer} onPress={() => setIsColorPickerOpen(true)}>
          <Text style={styles.colorText}>{selectedColor.toUpperCase()}</Text>
          <View style={[styles.colorPreview, { backgroundColor: selectedColor }]}></View>
        </Pressable>

        <View style={styles.bottomContainer}>
          <Pressable style={styles.buttonContainer} onPress={() => nextScreen()}>
            <Text style={styles.buttonText}>NEXT</Text>
          </Pressable>
        </View>

      </ScrollView>

      <ColorPicker
        isVisible={isColorPickerOpen}
        onColorSelected={color => {
          setSelectedColor(color)
          setIsColorPickerOpen(false)
        }}
        closeModal={() => setIsColorPickerOpen(false)}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
  },
  scrollView: {
    // paddingTop: 20,
  },
  headerContainer: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // inputContainer: {
  //   flex: 6,
  // },
  bottomContainer: {
    // flex: 1,
    paddingVertical: 10,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 55,
    width: 150,
    borderRadius: 50,
    borderColor: '#707070',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
  },
  colorFieldContainer: {
    flex: 1,
    height: 55,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  colorPreview: {
    flex: 1,
    height: '65%',
    maxWidth: 35,
    marginVertical: 15,
    marginRight: 10,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
  },
  colorText: {
    color: '#707070',
    fontStyle: 'italic',
  },
});
