import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../coponents/CustomInput/CustomInput';
import CustomButtont from '../../coponents/CustomButton/CustomButton';

const UpdateScreen = ({navigation}) => {
  const [area, setArea] = useState([]);
  const [deviceName, setDeviceName] = useState();
  const [fileName, setFileName] = useState();
  const [groupName, setGroupName] = useState();
  const [storeName, setStoreName] = useState();
  const submitPress = () => {
    navigation.navigate('Device');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.root}>
        <Text style={styles.logo}>Update Device</Text>

        <CustomInput
          placeholder={'Device Name'}
          value={deviceName}
          setValue={setDeviceName}
        />
        <CustomInput
          placeholder={'Group Name'}
          value={groupName}
          setValue={setGroupName}
        />
        <CustomInput placeholder={'Area'} value={area} setValue={setArea} />

        <CustomInput
          placeholder={'Store Name'}
          value={storeName}
          setValue={setStoreName}
        />
        <CustomButtont text="Submit" onPress={submitPress} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 50,
  },
  container: {
    flex: 1,
  },
});
