import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../coponents/CustomInput/CustomInput';
import CustomButtont from '../../coponents/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
const SiginScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSiginPress = () => {
    navigation.navigate('Home');
  };
  const onRedataPress = () => {
    navigation.navigate('Redata');
  };
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <CustomInput
        placeholder="Pasword"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <CustomButtont text="Sign In" onPress={onSiginPress} />
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
});
export default SiginScreen;
