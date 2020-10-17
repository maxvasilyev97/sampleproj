import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Qr() {
    return(
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.button}
            //onPress={onPress}
            >
                <Text style={styles.btext}>Сканировать</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            //onPress={onPress}
            >
                <Text style={styles.btext}>Ввод номера объекта</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            //onPress={onPress}
            >
                <Text style={styles.btext}>Задачи</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        alignItems: 'center', //выравнивание по горизонитали
        flex: 1,
        justifyContent: 'center' //выравнивание по вертикали
    },
    btext: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#005B9C",
        padding: 11, //отступ внутри
        margin: 10, //отступ снаружи
        //marginTop: 20,
        borderRadius: 15,
        width: 300
        //top: 20,
    }
});