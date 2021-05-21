/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const GoalCheck = ({
  client, clientGoals, goalsMet, check, setCheck,
}) => {
  console.log('this is goalMet', clientGoals[0].goals);
  const List = () => clientGoals[0].goals.map((entry, i) => (
    <View key={i}>
      <Text>{entry}</Text>
      <Text onPress={() => console.log('hello')}>Met</Text>
      <Text onPress={() => console.log('goodbye')}>Not Met</Text>
      <Text onPress={() => console.log('what up')}>N/A</Text>
    </View>
  ));
  return (
    <View>
      <TextInput
        placeholder="Brief summarized title"
      />
      <List />
      <Text onPress={() => setCheck(!check)}>{'I\'m all done!'}</Text>
    </View>
  );
};

export default GoalCheck;
