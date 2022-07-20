import React from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import InputField from '../../../components/InputField';

import { Text, View } from '../../../components/Themed';
import { InputFieldValues, RootStackScreenProps } from '../../../types';

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

    const nextScreen = () => {
        const skipCheckFields = true
        if (skipCheckFields || Object.values(inputText).every(value => value !== '')) {
            // navigation.navigate('');
            console.log("hi")
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
            <View style={styles.headerContainer}>
                <Text>FILL IN INFO</Text>
            </View>

            <View style={styles.inputContainer}>
                {keys.map((key) => {
                    if (route.params[key].isWanted) {
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
                            />
                        )
                    }
                })}
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
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 6,
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
