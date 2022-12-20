import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const UserInformationScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{fontSize: 20, textAlign: 'center', justifyContent: 'center'}}>
        this is User InformationScreen
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default UserInformationScreen;
