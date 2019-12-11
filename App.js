import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState();
  return (
    <View style={styles.screen}>
      <View style = {styles.inputContainer}>
        <TextInput placeholder='Add a goal' style={styles.input}/>
        <Button title='ADD'/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
});