import 'react-native-gesture-handler';
import * as React from 'react';
import Login from './Views/login';
import Qr from './Views/qr';
import Task from './Views/task';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Views/screen1';

const Stack = createStackNavigator();

function ShowAvatar() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./img/avatar.png')}
    />
  );
}

function ShowHome() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./img/home.svg')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{
            headerShown: false,
            title: 'Авторизация',
            headerTitle: props => <LogoTitle {...props} />
          }}
        />
        <Stack.Screen
          name="QrScreen"
          component={Qr}
          initialParams={{
            itemId: 42
          }}
          options={{
            title: 'QR',
            headerTitle: props => <ShowAvatar {...props} />,
            headerBackImage: ShowHome,
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
        <Stack.Screen
          name="TaskScreen"
          component={Task}
          initialParams={{
            itemId: 42
          }}
          options={{
            title: 'Заявка',
            headerTitle: props => <ShowAvatar {...props} />,
            headerBackImage: ShowHome,
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