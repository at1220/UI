import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomButtont from '../../coponents/CustomButton/CustomButton';
import CustomInput from '../../coponents/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';

const RedataScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const onRedataPress = () => {
    console.warn('Restore Data');
    navigation.navigate('Home');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Restore Data</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setvalue={setUsername}
      />
      <CustomInput
        placeholder="Pasword"
        value={password}
        setvalue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput placeholder="Code action" value={code} setvalue={setCode} />
      <CustomButtont text="Restore Data" onPress={onRedataPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
});
export default RedataScreen;
