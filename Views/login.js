import React from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

export default function Login() {  
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Вход</Text>
        <View style={styles.sign}>
          <Text style={styles.text}>Логин</Text>
          <TextInput
            style={styles.input}
            placeholder = '123456'
          />
          <Text style={styles.text}>Пароль</Text>
          <TextInput
            style={styles.input}
            placeholder = '******'
            secureTextEntry={true}
          />
          <View>
          <TouchableOpacity
            style={styles.button}
            //onPress={onPress}
          >
            <Text style={styles.btext}>Войти</Text>
          </TouchableOpacity>
          </View>
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
  sign: {
    borderWidth: 2,
    borderColor: '#005B9C',
    borderRadius: 15,
    padding: 30, //отступ внутри
    margin: 20, //отступ снаружи
  },
  title: {
    fontSize: 36,
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
  input: {
    borderWidth: 2,
    borderColor: '#005B9C',
    borderRadius: 15,
    padding: 8, //отступ внутри
    margin: 10, //отступ снаружи
    width: 200,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#005B9C",
    padding: 11, //отступ внутри
    margin: 10, //отступ снаружи
    marginTop: 30,
    borderRadius: 15,
  }
});