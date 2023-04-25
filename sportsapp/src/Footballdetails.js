import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Footballdetails({route, navigation}) {
  const {fixture, goals, league, teams} = route.params;

  return (
    <View>
      <View
        style={{
          padding: 20,
          margin: 15,
          backgroundColor: '#003047',
          borderRadius: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontSize: 20,

              color: 'white',
              marginBottom: '10%',
            }}>
            League : {league.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            Country : {league.country}
          </Text>
          <Text
            style={{
              fontSize: 20,

              color: 'white',
            }}>
            Season : {league.season}
          </Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Image height={60} width={60} source={{uri: league.logo}} />
        </View>
      </View>
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
          Venu : {fixture.venue.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
          }}>
          City : {fixture.venue.name}
        </Text>
        <Text
          style={{
            fontSize: 20,

            color: 'white',
          }}>
          referee : {fixture.referee}
        </Text>
        <Text
          style={{
            fontSize: 20,

            color: 'white',
          }}>
          Winner :{' '}
          {teams.home.winner == true ? (
            teams.home.name
          ) : teams.away.winner == true ? (
            teams.away.name
          ) : (
            <Text>Tie</Text>
          )}
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
            {goals.home != null ? goals.home : 0}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            {goals.away != null ? goals.away : 0}
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
