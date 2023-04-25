import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Fixtures from '../API_DATA/fixture.json';
import Footballdata from '../API_DATA/Football.json';

export default function Football({navigation}) {
  const [isLoaded, setIsloaded] = useState(false);
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://cricket-live-data.p.rapidapi.com/fixtures`, {
  //     headers: {
  //       'X-RapidAPI-Key': '6130a43ad0msh7feb49b4f970724p129b08jsn93fcc4f54d74',
  //       'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
  //     },
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(c => setData(c.results))
  //     .catch(err => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setIsloaded(true);
  //     });
  // }, []);

  useEffect(() => {
    setData(Footballdata.response);
    setIsloaded(true);
  }, []);

  const RenderItem = ({index, item}) => (
    <TouchableOpacity
      style={{
        padding: 15,
        margin: 15,
        backgroundColor: '#003047',
        borderRadius: 25,
        justifyContent: 'space-around',
      }}
      onPress={() => {
        navigation.navigate('Football details', {
          fixture: item.fixture,
          goals: item.goals,
          league: item.league,
          teams: item.teams,
        });
      }}>
      <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
        <View>
          <Image
            source={{uri: item.teams.home.logo}}
            style={{width: 60, height: 60}}
          />
          <Text style={{fontSize: 18, color: 'white'}}>
            {item.teams.home.name.length > 10
              ? item.teams.home.name.substring(0, 10) + '...'
              : item.teams.home.name}
          </Text>
        </View>
        <Text
          style={{fontSize: 40, color: 'white', textAlignVertical: 'center'}}>
          Vs
        </Text>
        <View>
          <Image
            source={{uri: item.teams.away.logo}}
            style={{width: 60, height: 60}}
          />
          <Text style={{fontSize: 18, color: 'white'}}>
            {item.teams.away.name.length > 10
              ? item.teams.away.name.substring(0, 10) + '...'
              : item.teams.away.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#D6252E'}}>
        <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
          Football Fixtures
        </Text>
      </View>
      {isLoaded ? (
        <FlatList
          data={data}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator color={'red'} size={'30%'} />
        </View>
      )}
    </View>
  );
}
