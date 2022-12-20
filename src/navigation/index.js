import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screen/SigninScreen/SignScreen';
import RedataScreen from '../screen/RedataScreen/RedataScreen';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import PlayVieoScreen from '../screen/PlayVideoScreen/PlayVieoScreen';
import UpdateScreen from '../screen/UpdateScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SingIn" component={SignInScreen} />
        <Stack.Screen name="Redata" component={RedataScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlayVideo" component={PlayVieoScreen} />
        <Stack.Screen name="Update" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
