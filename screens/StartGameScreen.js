import React, {useState} from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  Button, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {

  //---STATES---
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
//---STATE METHODS
  const numberInputHandler = inputText => {
    //Validate that text input is numeric values 0-9 and nothing else on every keystroke
    //NOTE: the .replace() method is a javascript method, and it's params is js syntax
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    //NOTE: NaN (Not a Number) is a default js value
    //if chosenNumber is not a num, is a negative num, or is greater than 99 then don't execute the rest of the function
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid Numeber', 'Number has to be a number 1-99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue('');
    Keyboard.dismiss();
  }
  //---SLECTION CONFIRMATION UI & LOGIC---
  let confirmedOutput;

  if(confirmed) {
    confirmedOutput = (
      <Card style={ styles.summaryContainer } >
        <BodyText style={styles.cardHeaderText}>You Selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>Start Game</MainButton>
      </Card>
    );
  }
//-----MAIN START SCREEN UI-----
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText style={styles.directionText}>Select a Number</BodyText>
          <Input style={styles.input} autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} placeholder="Number(1-99)"/>
          <View style={styles.buttonContainer}>
            <View>
              <Button title="Reset" onPress={resetInputHandler} color={Colors.ojRedL2}/>
            </View>
            <View>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colors.tealL2}/>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

//NOTE: Shadow properties only work on iOS & Elevation properties only work on Android...

//---STYLING---
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.tealL1
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: Colors.tealD1
  },
  button: {
    width: 100
    
  },
  input: {
    width: 100,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  directionText: {
    color: Colors.tealD1,
    fontSize: 16
  },
  cardHeaderText: {
    color: Colors.teal,
    fontSize: 16
  }
});

export default StartGameScreen;