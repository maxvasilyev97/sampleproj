import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Background from '../img/bg.png';

function ShowImg() {
    return (
      <Image
        style={{
          width: 230,
          height: 230,
          marginBottom: 30,
        }}
        source={require('../img/qr.svg')}
      />
    );
  }

export default function Qr({ navigation }) {
    return(
        <View style={styles.container}>
            <ShowImg />
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
            onPress={() => {                
                navigation.navigate('TicketsScreen');
            }}
            >
                <Text style={styles.btext}>Задачи</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        backgroundImage: `url(${Background})`, 
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
        borderRadius: 15,
        width: 300        
    }
});