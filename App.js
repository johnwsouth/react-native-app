import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  //const [stateProperty, stateAlteringFunction] = useState('', [], {}, 1, 'initilized value');

  const addGoalHandler = goalTitle => {
    setCourseGoals(courseGoals => [...courseGoals, {id: Math.random().toString(), value: goalTitle}]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => {
        return goalId !== goal.id
      })
    })
  }

  const flipAddMode = () => {setIsAddMode(true)}

  return (
    <View style = {styles.screen}>
      <Button title="Add New Goal" onPress={flipAddMode}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}/>
      <FlatList
      keyExtractor = {(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => ( <GoalItem id={itemData.item.id} onDelete = {removeGoalHandler} title = {itemData.item.value}/> )}/>


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
