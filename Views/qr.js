import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Qr() {
    return(
        <View style={style.container}>
            <Text>QR</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 24
    }
});