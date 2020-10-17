import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, PickerIOSComponent, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState('имя')
  const [age,setAge] = useState('30')
  const [person,setPerson] = useState({name: 'кек', age: 30})
  
  const clickHandler = () => {
    setName('имя2');
    setPerson({name: 'сас', age: 20})
  }

  const changeText = (newtext) => {
    setName(newtext)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Введи имя</Text>
        <TextInput style={styles.input} onChangeText={changeText}/>
        <Text>Введи возраст</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.boldText}>Имя: {name}, возраст: {age}</Text>
      </View>
      <View style={styles.body}>
        <Text>{name}</Text>
        <Text>{person.name}, {person.age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='жми' onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10
  }
});
