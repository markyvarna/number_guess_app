import React from 'react';
import {View, StyleSheet} from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors from '../constants/colors';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: Colors.tealD2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.7,
    elevation: 5,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10
  }
});

export default Card;