import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PlayVideoListScreen({navigation}) {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  //const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        const {data: response} = await axios.get(
          'https://jsonplaceholder.typicode.com/photos',
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setisLoading(false);
    };
    fetchData();
  }, []);
  // const getListVideo = async () => {
  //   const result = await axiosService
  //     .get('https://jsonplaceholder.typicode.com/albums')
  //     .then(result => {
  //       setData(result.data.data);
  //     });
  // };
  const videoPlaySignPress = () => {
    navigation.navigate('PlayVideo', {
      uri: 'https://vjs.zencdn.net/v/oceans.mp4',
    });
  };
  const dowloadPress = () => {
    console.warn('Dowload Video');
  };

  const oneVideo = ({item}) => (
    <TouchableOpacity onPress={videoPlaySignPress}>
      <View style={styles.item}>
        <View style={styles.avatarContainer}>
          <Image Source={item.thumbnailUrl} style={styles.avatar} />
        </View>
        <Text style={styles.nameItem}>{item.title}</Text>
        <TouchableOpacity onPress={dowloadPress}>
          <Text style={styles.icon}>
            <Ionicons name="arrow-down" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text
        style={{
          color: 'black',
          fontSize: 25,

          fontWeight: 'bold',
        }}>
        Video List
      </Text>
      <SafeAreaView>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={oneVideo}
            keyExtractor={item => {
              item.id;
            }}
            ListEmptyComponent={<Text>Không có Video</Text>}
          />
        )}
        {/* <FlatList
          data={data}
          renderItem={oneVideo}
          ListEmptyComponent={<Text>Không có Video</Text>}
        /> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
  item: {
    flex: 1,
    flexDirection: 'row',

    paddingVertical: 20,
  },
  avatar: {height: 50, width: 50},
  avatarContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 70,
    width: 70,
  },
  nameItem: {fontWeight: '600', fontSize: 16, marginLeft: 13},
  icon: {
    marginLeft: 70,
  },
});
