import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cricket from './Cricket';
import Cricketdetails from './Cricketdetails';

export default function CricketFixture() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Cricket"
        component={Cricket}
      />
      <Stack.Screen name="Cricket details" component={Cricketdetails} />
    </Stack.Navigator>
  );
}
