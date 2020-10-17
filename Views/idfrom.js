import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function Form() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Введите номер объекта</Text>            
            <TextInput
                style={styles.input}
                placeholder = '123456789'                
            />
            <View style={styles.butcontainer}>    
                <TouchableOpacity
                style={styles.button1}
                //onPress={onPress}
                >
                    <Text style={styles.btext}>Отмена</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button2}
                //onPress={onPress}
                >
                    <Text style={styles.btext}>Далее</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        alignItems: 'center', //выравнивание по горизонитали
        flex: 1,
        justifyContent: 'center' //выравнивание по вертикали
    },
    input: {
        borderWidth: 2,
        borderColor: '#005B9C',
        borderRadius: 15,
        padding: 8, //отступ внутри
        margin: 10, //отступ снаружи
        width: 200,
      },
    text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    },      
    btext: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    button1: {        
        backgroundColor: "#005B9C",        
        borderRadius: 15,
        width: 150,       
        paddingHorizontal:20,
        paddingVertical:15,        
        marginRight:20,        
    },
    button2: {        
        backgroundColor: "#005B9C",        
        borderRadius: 15,
        width: 150,        
        paddingHorizontal:20,
        paddingVertical:15,        
    },
    butcontainer: {        
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 200
    },
});