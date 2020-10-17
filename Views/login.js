import React from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

export default function Login() {
    // const [name,setName] = useState('имя')
    // const [age,setAge] = useState('30')
    // const [person,setPerson] = useState({name: 'кек', age: 30})
    
    // const clickHandler = () => {
    //   setName('имя2');
    //   setPerson({name: 'сас', age: 20})
    // }
  
    // const changeText = (newtext) => {
    //   setName(newtext)
    // }
    
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Вход</Text>
        <View style={styles.sign}>
          <Text style={styles.text}>Логин</Text>
          <TextInput
            style={styles.input}
            placeholder = '123456'
            //textAlign = 'center'
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
    
    
    //   <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text>Введи имя</Text>
    //     <TextInput 
    //       style={styles.input}
    //       onChangeText={changeText}
    //       placeholder = 'имя'        
    //     />
    //     <Text>Введи возраст</Text>
    //     <TextInput
    //       style={styles.input}
    //       onChangeText={(newage) => setAge(newage)}
    //       placeholder = '99'
    //       keyboardType='numeric'
    //     />
    //     <Text style={styles.boldText}>Имя: {name}, возраст: {age}</Text>
    //     <TextInput
    //       style={styles.input}
    //       multiline
    //       placeholder = 'много строк'
    //     />
    //   </View>
    //   <View style={styles.body}>
    //     <Text>{name}</Text>
    //     <Text>{person.name}, {person.age}</Text>
    //   </View>
    //   <View style={styles.buttonContainer}>
    //     <Button title='жми' onPress={clickHandler}/>
    //   </View>
    // </View>
     )
}

// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       header:{
//         backgroundColor: 'pink',
//         padding: 20,
//       },
//       boldText: {
//         fontWeight: 'bold',
//       },
//       body: {
//         backgroundColor: 'yellow',
//         padding: 20,
//       },
//       input: {
//         borderWidth: 1,
//         borderColor: '#777',
//         padding: 8,
//         margin: 10,
//         width: 200,
//       }
// });
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
    //top: 20,
  }
});