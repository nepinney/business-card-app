import React from "react";
import { KeyboardTypeOptions, Pressable, StyleSheet, TextInput } from "react-native";
import { Text, View } from "./Themed";

interface InputFieldProps {
    inputText: string;
    setInputText: (text: string) => void;
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    redHighlight?: boolean;
}

export default function InputField(props: InputFieldProps) {
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, props.redHighlight ? {borderColor: 'red'} : {}]}
                onChangeText={(text) => {
                    props.setInputText(text)
                }}
                value={props.inputText}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: '100%',
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        fontStyle: 'italic',
    }
});