import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../coponents/CustomInput/CustomInput';
import CustomButtont from '../../coponents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import axiosService from '../../module/axiosService';
const SiginScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const onSiginPress = async () => {
    console.log(username, password);
    if (username != '') {
      if (password != '') {
        const result = await axiosService
          .post('http://localhost:8080/api/login/', {
            username: username,
            password: password,
          })
          .then(res => {
            console.log(res);
            navigation.navigate('Home');
          })
          .catch(
            alert('username or password invalid'),
            navigation.navigate('SingIn'),
          );
      } else {
        alert('password not empty');
      }
    } else {
      alert('username not empty! ');
    }
    // validate username
    //validate passwork
    //axiosService.get(URL,body)
    //navigation.navigate('Home');
  };
  const onRedataPress = () => {
    navigation.navigate('Redata');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.logo}>Login</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Pasword"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButtont text="Sign In" onPress={onSiginPress} />
        <CustomButtont text="Restore Data" onPress={onRedataPress} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 50,
  },
});
export default SiginScreen;
