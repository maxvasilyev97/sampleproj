import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Form() {
    return(
        <View style={style.container}>
            <Text>Form</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 24
    }
});