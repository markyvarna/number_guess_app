import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import {} from '@expo/vector-icons';

import Colors from '../constants/colors';
import TitleText from '../components/TitleText';
// import MainButton from '../components/MainButton';
import RestartButton from '../components/RestartButton';
import BodyText from '../components/BodyText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>The Game is Over!</TitleText>
      <View style={styles.imgContainer}>
        <Image 
        // source={require('../assets/success.png')}
        source={{uri: 'https://media2.giphy.com/media/7TqT3vOegFkZRcbdnG/source.gif'}}  
        style={styles.img} 
        resizeMode="cover"
        />
      </View>
      <TitleText style={styles.body}>Number of Guesses:   <TitleText style={styles.num}>{props.roundsNumber}</TitleText></TitleText>
      <TitleText style={styles.body}>Number was:   <TitleText style={styles.num}>{props.userNumber}</TitleText></TitleText>
      <RestartButton onPress={props.onRestart}/>
      <BodyText style={{color: 'white'}}>Play Again</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ojRedL1
  },
  title: {
    fontSize: 30,
    color: Colors.ojRedD2,
    paddingBottom: 30
  },
  body: {
    fontSize: 18,
    color: Colors.ojRedD2,
    paddingBottom: 30
  },
  img: {
    width: '100%',
    height: '100%'
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.tealL2,
    overflow: 'hidden'
  },
  num: {
    color: Colors.tealL2,
    fontSize: 30
  }
});

export default GameOverScreen;