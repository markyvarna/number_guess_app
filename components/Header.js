import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowColor: Colors.tealL1
  },
  headerTitle: {
    color: 'white',
    fontSize: 30
  }
});

export default Header;