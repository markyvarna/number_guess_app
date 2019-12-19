import React, {useState, useRef, useEffect} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  Alert,
  ScrollView,
  FlatList
} from 'react-native';

import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);//rounds number up to non decimal number
  max = Math.floor(max);//rounds number down to non decimal number
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if(rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess); 
  // const [rounds, setRounds] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;//this pulls the userChoice and onGameOver objects from the props object and assigns them to constants with the same names... We want to add these objects to useEffect to be observed of any changes for the next render, we pull them out of props because if we simply put props to be observed, ALL property object of the parent would be observed...
  const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
      <TitleText style={styles.itemTitle}>Guess #{listLength - itemData.index}</TitleText>
      <BodyText style={styles.itemBody}>{itemData.item}</BodyText>
    </View>
  );

  useEffect(() => {
    if (currentGuess === userChoice) {
      //onGameOver(rounds);
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);//useEffect will only re run if one of the values specified in the closing [] have changed... 

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) || 
      (direction === 'greater' && currentGuess > props.userChoice)) 
    {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'}
      ]);
      return;//stop function from further execution...
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current, 
      currentHigh.current, 
      currentGuess);
    setCurrentGuess(nextNumber);
    // setRounds(curRound => curRound + 1);
    setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);
    
  };

  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>Opponents Guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button 
        title="LOWER" 
        onPress={nextGuessHandler.bind(this, 'lower')} 
        color={Colors.tealL2}
        />
        <View style={styles.separator}/>
        <Button 
        title="HIGHER" 
        onPress={nextGuessHandler.bind(this, 'greater')} 
        color={Colors.ojRedD2}
        />
      </Card>
      <View style={styles.list}>
        {/* <ScrollView>
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))
          }
        </ScrollView> */}
        <FlatList 
         keyExtractor={(item) => item } 
         data={pastGuesses} 
         renderItem={renderListItem.bind(this, pastGuesses.length)}
         
         />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  },
  title: {
    fontSize: 18,
    color: Colors.teal
  },
  separator: {
    width: 2,
    height: '120%',
    backgroundColor: Colors.ojRedL2
  },
  listItem: {
    borderColor: Colors.ojRedL1,
    borderWidth: 2,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around'
    
  },
  list: {
    flex: 1,//the view that wraps the list must have a flex for it to be scrollable on android
    width: '80%',
    paddingTop: 15
  },
  itemTitle: {
    color: Colors.teal,
    fontSize: 18
  },
  itemBody: {
    color: Colors.ojRedL2,
    fontSize: 18
  }
});

export default GameScreen;