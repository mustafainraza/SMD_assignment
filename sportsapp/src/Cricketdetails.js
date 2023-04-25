import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Cricketdetails({route, navigation}) {
  const {venue, date, match_subtitle, status, home, away} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          padding: 20,
          margin: 15,
          backgroundColor: '#003047',
          borderRadius: 25,
        }}>
        <Text
          style={{
            fontSize: 20,

            color: 'white',
            marginBottom: '10%',
          }}>
          Venu : {venue}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
          }}>
          Date : {date}
        </Text>
        <Text
          style={{
            fontSize: 20,

            color: 'white',
          }}>
          Status : {status}
        </Text>
        <Text
          style={{
            fontSize: 20,

            color: 'white',
          }}>
          Subtitle : {match_subtitle}
        </Text>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '10%',
          }}>
          <Text
            style={{
              fontSize: 20,

              color: 'white',
            }}>
            Home
          </Text>
          <Text
            style={{
              fontSize: 20,

              color: 'white',
            }}>
            Away
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '5%',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            {home.name.length > 15
              ? home.name.substring(0, 15) + '...'
              : home.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            {away.name.length > 15
              ? away.name.substring(0, 15) + '...'
              : away.name}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#D6252E',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          borderRadius: 25,
          width: 100,
          height: 50,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
