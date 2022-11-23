import {View, Text, LogBox, StyleSheet, NativeModules} from 'react-native';
import React, {useState} from 'react';
import DeviceInfo from 'react-native-device-info';
LogBox.ignoreAllLogs();
const DeviceInformationScreen = () => {
  let deviceId = DeviceInfo.getDeviceId();
  // let devices = getDevice(); sai
  let brand = DeviceInfo.getBrand();
  // let deviceName = getDeviceName(); sai
  // let uiniqueId = getUniqueId(); sai
  const name = DeviceInfo.getDeviceName();
  return (
    <View>
      <View>
        <Text
          style={{fontSize: 20, textAlign: 'center', justifyContent: 'center'}}>
          This is Device information Screen:
        </Text>
      </View>
      <View>
        <Text>Branch name: {brand}</Text>
        <Text>Device ID: {deviceId}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default DeviceInformationScreen;
