import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.number}>{props.children}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.ojRedL1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  number: {
    color: Colors.ojRedD1,
    fontSize: 26
  }
});

export default NumberContainer;