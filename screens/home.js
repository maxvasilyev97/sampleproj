import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Home() {
    return(
        <View style={style.container}>
            <Text>Домашняя страница</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 24
    }
});