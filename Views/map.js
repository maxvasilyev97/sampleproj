import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Background from '../img/bg.png';
import MapImg from '../img/map.png';

function ShowImg() {
    return (
      <Image
        style={{
          width: 300,
          height: 450,
          marginBottom: 30,
          position: 'absolute',
          top: 0,
          bottom: 0
        }}
        source={require('../img/map.png')}
      />
    );
  }

  export default function Map({ navigation }) {
    return(
        <View style={styles.container}>
            <ShowImg />
            <TouchableOpacity
            style={styles.button}
            onPress={() => {                
                navigation.navigate('TaskScreen');
            }}
            >
                <Text style={styles.btext}>Назад</Text>
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
        position: 'absolute',
        bottom:20,        
        borderRadius: 15,
        width: 100        
    }
});