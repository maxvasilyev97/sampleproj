import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Review() {
    return(
        <View style={style.container}>
            <Text>ревью</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 24
    }
});