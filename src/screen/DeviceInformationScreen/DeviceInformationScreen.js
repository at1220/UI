import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import DeviceInfor from 'react-native-device-info';
import CustomButtont from '../../coponents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
const DeviceInformationScreen = () => {
  const navigation = useNavigation();
  const updateOnPress = () => {
    navigation.navigate('Update');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            justifyContent: 'center',
            color: 'black',
            fontFamily: 'bold',
          }}>
          Detail Device
        </Text>
        <CustomButtont text="Update Device" onPress={updateOnPress} />
      </View>
      <View>
        <Text style={styles.textstyle}>Device ID: </Text>
        <Text style={styles.textstyle}>Device Name:</Text>
        <Text style={styles.textstyle}>Store Name:</Text>
        <Text style={styles.textstyle}>Group Name:</Text>
        <Text style={styles.textstyle}>Area:</Text>
        <Text style={styles.textstyle}>File Name:</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textstyle: {
    marginLeft: 10,
    fontSize: 17,
    marginTop: 10,
  },
});

export default DeviceInformationScreen;
