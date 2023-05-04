import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    return (
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        >
        </TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '85%',
        height: 50,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        padding: 15,
        alignSelf:'center'
       // borderWidth: 1,
        //borderColor: 'orange'
    },
});

export default Input;