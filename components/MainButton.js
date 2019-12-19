import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.buttonView, props.style]}>
        <TitleText style={styles.text}>
          {props.children}
        </TitleText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: 'white',
    paddingVertical: 8,
    borderColor: Colors.tealL2,
    borderWidth: 3,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  text: {
    fontSize: 22,
    color: Colors.tealL2,
    paddingLeft: 5,
    paddingRight: 5
  }
}); 

export default MainButton;