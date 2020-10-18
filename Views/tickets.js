import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import Background from '../img/bg.png';
//import {Picker} from '@react-native-community/picker';

//const [selectedValue, setSelectedValue] = useState("java");

export default function Tickets({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Выберите заявку</Text>
            {/* <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    Picker.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
            <TouchableOpacity
            style={styles.button}
            onPress={() => {                
                navigation.navigate('TaskScreen');
            }}
            >
                <Text style={styles.btext}>Обрыв линии электропередач</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            //onPress={onPress}
            >
                <Text style={styles.btext}>Наименование задачи</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            //onPress={onPress}
            >
                <Text style={styles.btext}>Наименование задачи</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button1}
                onPress={() => {              
                    navigation.navigate('QrScreen');
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
    input: {
        borderWidth: 2,
        borderColor: '#005B9C',
        borderRadius: 15,
        padding: 8, //отступ внутри
        margin: 10, //отступ снаружи
        width: 200,
      },
    title: {
        fontSize: 36,
        margin: 20,
      },
    text: {
        fontSize: 18,
        //textAlign: 'center',
        color: 'black',
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
    },
    button1: {
        alignItems: "center",
        backgroundColor: "#005B9C",
        padding: 11, //отступ внутри
        position: 'absolute',
        bottom:20,        
        borderRadius: 15,
        width: 100        
    }
});