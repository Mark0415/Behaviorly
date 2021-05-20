/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const GoalCheck = ({ client, clientGoals }) => {
  const [goalMet, setGoalMet] = useState([]);
  const checkGoals = (name) => {
    for (let i = 0; i < clientGoals.lenght; i += 1) {
      console.log('these are goals', clientGoals[i]);
      clientGoals[i].name === name ? setGoalMet(client[i].goals) : null;
    }
    goalMet.map((met) => <Text>{met}</Text>);
  };

  return (
    <View>
      <TextInput
        placeholder="Brief summarized title"
      />
    </View>
  );
};

export default GoalCheck;
