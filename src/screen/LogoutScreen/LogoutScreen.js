import {View, Text} from 'react-native';
import React from 'react';
import CustomButtont from '../../coponents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
const LogoutScreen = () => {
  const navigation = useNavigation();
  const onSignOutPress = () => {
    navigation.navigate('SingIn');
  };
  return (
    <View>
      <CustomButtont text="Sign out" onPress={onSignOutPress} />
    </View>
  );
};

export default LogoutScreen;
