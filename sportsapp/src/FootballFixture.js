import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Football from './Football';
import Footballdetails from './Footballdetails';

export default function FootballFixture() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Football"
        component={Football}
      />
      <Stack.Screen name="Football details" component={Footballdetails} />
    </Stack.Navigator>
  );
}
