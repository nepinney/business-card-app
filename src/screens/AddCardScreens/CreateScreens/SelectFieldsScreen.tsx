import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import CustomSelect from '../../../components/CustomSelect';

import { Text, View } from '../../../components/Themed';
import { RootStackScreenProps } from '../../../navigation/types';
import { BusinessCardInformation, SelectionFields } from '../../../utils/types';

export default function SelectFields({ navigation }: RootStackScreenProps<'SelectFields'>) {

  const allFields: SelectionFields = {
    name: {
      isWanted: true,
      placeholder: 'NAME',
      keyboardType: 'default',
    },
    email: {
      isWanted: false,
      placeholder: 'EMAIL',
      keyboardType: 'email-address',
    },
    phoneOne: {
      isWanted: false,
      placeholder: 'PHONE NUMBER',
      keyboardType: 'numeric',
    },
    phoneTwo: {
      isWanted: false,
      placeholder: 'PHONE NUMBER 2',
      keyboardType: 'numeric',
    },
    website: {
      isWanted: false,
      placeholder: 'WEBSITE',
      keyboardType: 'default',
    },
    linkedin: {
      isWanted: false,
      placeholder: 'LINKEDIN',
      keyboardType: 'default',
    },
    instagram: {
      isWanted: false,
      placeholder: 'INSTAGRAM',
      keyboardType: 'default',
    },
    twitter: {
      isWanted: false,
      placeholder: 'TWITTER',
      keyboardType: 'default',
    },
    address: {
      isWanted: false,
      placeholder: 'ADDRESS',
      keyboardType: 'default',
    },
    title: {
      isWanted: false,
      placeholder: 'TITLE',
      keyboardType: 'default',
    },
    company: {
      isWanted: false,
      placeholder: 'COMPANY',
      keyboardType: 'default',
    },
    facebook: {
      isWanted: false,
      placeholder: 'FACEBOOK',
      keyboardType: 'default',
    },
  }

  const [isSelected, setIsSelected] = React.useState<SelectionFields>(allFields);

  const isLabelSelected = (label: string) => {
    if (isSelected[label].isWanted) {
      return true;
    }
    return false;
  }

  const setFieldIsSelected = (field: string) => {
    setIsSelected({ ...isSelected, [field]: { ...isSelected[field], isWanted: !isLabelSelected(field)} });
  }

  const nextScreen = () => {
    navigation.navigate('FillFields', isSelected);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>PICK YOUR FIELDS</Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomSelect label="NAME" isSelected={isLabelSelected('name')} setIsSelected={() => setFieldIsSelected('name')} />
        <CustomSelect label="EMAIL" isSelected={isLabelSelected('email')} setIsSelected={() => setFieldIsSelected('email')} />
        <CustomSelect label="PHONE 1" isSelected={isLabelSelected('phoneOne')} setIsSelected={() => setFieldIsSelected('phoneOne')} />
        {isLabelSelected('phoneOne') ? <CustomSelect label="PHONE 2" isSelected={isLabelSelected('phoneTwo')} setIsSelected={() => setFieldIsSelected('phoneTwo')} /> : null }
        <CustomSelect label="WEBSITE" isSelected={isLabelSelected('website')} setIsSelected={() => setFieldIsSelected('website')} />
        <CustomSelect label="LINKEDIN PROFILE" isSelected={isLabelSelected('linkedin')} setIsSelected={() => setFieldIsSelected('linkedin')} />
        <CustomSelect label="INSTAGRAM HANDLE" isSelected={isLabelSelected('instagram')} setIsSelected={() => setFieldIsSelected('instagram')} />
        <CustomSelect label="TWITTER ADDRESS" isSelected={isLabelSelected('twitter')} setIsSelected={() => setFieldIsSelected('twitter')} />
        <CustomSelect label="ADDRESS" isSelected={isLabelSelected('address')} setIsSelected={() => setFieldIsSelected('address')} />
        <CustomSelect label="TITLE" isSelected={isLabelSelected('title')} setIsSelected={() => setFieldIsSelected('title')} />
        <CustomSelect label="COMPANY" isSelected={isLabelSelected('company')} setIsSelected={() => setFieldIsSelected('company')} />
        <CustomSelect label="FACEBOOK" isSelected={isLabelSelected('facebook')} setIsSelected={() => setFieldIsSelected('facebook')} />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.buttonContainer} onPress={() => nextScreen()}>
          <Text style={styles.buttonText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 6,
    // backgroundColor: 'blue',
  },
  bottomContainer: {
    flex: 1,
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
});