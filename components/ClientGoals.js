/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import GoalCheck from './GoalCheck';

const ClientGoals = ({
  client, clientVisible, setClientVisible, clientGoals,
}) => {
  const [entries, setEntries] = useState([
    {
      title: 'Volunteer Work/Art Class',
      date: '5/12/2021',
      goalList: {
        goalOne: {
          goal: 'Don\'t eat too much',
          status: 'N/A',
        },
        goalTwo: {
          goal: 'Wash hands',
          status: 'Met',
        },
        goalThree: {
          goal: 'Don\'t take things too personal',
          status: 'N/A',
        },
      },
    },
    {
      title: 'Exercise at Lake Merrit/ Oakland Library Tutor',
      date: '5/11/2021',
      goalList: {
        goalOne: {
          goal: 'Don\'t eat too much',
          status: 'N/A',
        },
        goalTwo: {
          goal: 'Wash hands',
          status: 'Met',
        },
        goalThree: {
          goal: 'Don\'t take things too personal',
          status: 'N/A',
        },
      },
    },
  ]);
  const [check, setCheck] = useState(false);

  const EntryList = () => entries.map((entry, i) => (
    <View key={i}>
      <Text>{entry.date}</Text>
      <Text>{entry.title}</Text>
    </View>
  ));
  if (check === false) {
    return (
      <View>
        <Text onPress={() => setClientVisible(!clientVisible)}>{client}</Text>
        <Icon
          reverse
          name="add"
          type="material"
          color="#1e96eb"
          size={10}
          onPress={() => setCheck(!check)}
        />
        <EntryList />
      </View>
    );
  }
  return (
    <GoalCheck
      clientGoals={clientGoals}
      client={client}
      check={check}
      setCheck={setCheck}
    />
  );
};

export default ClientGoals;
