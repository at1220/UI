import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DeviceInformationScreen from '../DeviceInformationScreen';
import UserInformationScreen from '../UserInformationScreen';
import LogoutScreen from '../LogoutScreen';
import PlayVideoListScreen from '../PlayVideoListScreen/PlayVideoListScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Device') {
            iconName = focused ? 'md-information-circle-outline' : 'tv-outline';
          } else if (route.name === 'User') {
            iconName = focused
              ? 'md-information-circle-outline'
              : 'person-circle-outline';
          } else if (route.name === 'Video') {
            iconName = focused ? 'play-circle' : 'film-outline';
          } else if (route.name === 'Logout') {
            iconName = focused ? 'exit-outline' : 'exit-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Device" component={DeviceInformationScreen} />
      <Tab.Screen name="User" component={UserInformationScreen} />
      <Tab.Screen name="Video" component={PlayVideoListScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
