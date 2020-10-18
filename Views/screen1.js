import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';

//Содержимое первого экрана
export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Первый экран текст</Text>
        <Button
          title="Перейти на второй экран"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'я передаюсь с первого экрана',
            });
          }}
        />
      </View>
    );
  }