import 'react-native-gesture-handler';
import * as React from 'react';
import Login from './Views/login';
import Qr from './Views/qr';
import IdForm from './Views/idfrom';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Views/screen1';

//Содержимое второго экрана
function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Второй экран текст</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Перейти на второй экран снова"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Домой" onPress={() => navigation.navigate('Home')} />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./img/logo.svg')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Login}
          options={{
            headerShown: false,
            title: 'Авторизация',
            headerTitle: props => <LogoTitle {...props} />
          }}
        />
        <Stack.Screen
          name="Details"
          component={Qr}
          initialParams={{
            itemId: 42
          }}
          options={{
            title: 'QR',
            headerStyle: {
              backgroundColor: '#005B9C',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white',
              },
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;