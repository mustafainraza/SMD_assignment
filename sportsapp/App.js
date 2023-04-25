import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Football from './src/Football';
import Cricket from './src/Cricket';
import CricketFixture from './src/CricketFixture';
import FootballFixture from './src/FootballFixture';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Cricket Fixture"
          component={CricketFixture}
          options={{
            tabBarLabel: 'Cricket',
            tabBarIcon: () => (
              <Image
                source={require('./Asset/cricket.png')}
                style={{
                  width: 45,
                  height: 45,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Football Fixture"
          component={FootballFixture}
          options={{
            tabBarLabel: 'Football',
            tabBarIcon: () => (
              <Image
                source={require('./Asset/football.png')}
                style={{
                  width: 45,
                  height: 45,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
