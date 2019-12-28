import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    if(enteredGoal.length > 0){
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
    }
    else{
      alert('Please at least one character');
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput placeholder='Add a goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.inputButtonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={() => {
              props.onCancel();
              setEnteredGoal('');}}/>
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create(
  {
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    inputButtonContainer : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%'
    },
    button: {
      flex: 2
    }
  });


export default GoalInput;
