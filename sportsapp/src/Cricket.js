import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Fixtures from '../API_DATA/fixture.json';

export default function Cricket({navigation}) {
  const [isLoaded, setIsloaded] = useState(true);
  const [data, setData] = useState(Fixtures.results);
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

  const RenderItem = ({index, item}) => (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        margin: 15,
        backgroundColor: '#003047',
        borderRadius: 25,
      }}
      onPress={() => {
        navigation.navigate('Cricket details', {
          venue: item.venue,
          date: item.date,
          status: item.status,
          match_subtitle: item.match_subtitle,
          home: item.home,
          away: item.away,
        });
      }}>
      <Text key={index} style={{fontSize: 18, color: 'white'}}>
        {item.match_title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#D6252E'}}>
        <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>
          Cricket Fixtures
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
