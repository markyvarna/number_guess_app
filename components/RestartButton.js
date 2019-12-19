import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import BodyText from './BodyText';


const RestartButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image 
        source={require('../assets/restart-white.png')} 
        resizeMode="center"
        style={styles.img}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50
  }
});
export default RestartButton;