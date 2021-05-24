/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import { Text, View, Modal } from 'react-native';
import { BehaviorlyContext } from './context/BehaviorContext.jsx';

const GoalItem = ({
  modalGoal, setModalGoal, date, setDate,
}) => {
  const { clientGoalList, person } = useContext(BehaviorlyContext);
  const [clientName] = person;
  const [clientGoals] = clientGoalList;

  const ShowGoals = () => clientGoals[clientName].currentGoals.map((entry, i) => (
    entry.date === date ? (
      <View key={i}>
        <Text>{entry.title}</Text>
        <Text>{entry.date}</Text>
        {entry.goals.map((items, j) => (
          <View key={j}>
            <Text>{items.goal}</Text>
            <Text>{items.status}</Text>
          </View>
        ))}
      </View>
    ) : null));

  return (
    <Modal
      animationType="slide"
      transparent
      visible
      onRequestClose={() => setModalGoal(false)}
    >
      <View>
        <ShowGoals />
        <Text onPress={() => setModalGoal(false)}>Submit</Text>
      </View>
    </Modal>
  );
};

export default GoalItem;
