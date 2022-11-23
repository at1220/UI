import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButtont = ({onPress, text, type = ''}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#457ff5',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 15,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default CustomButtont;
