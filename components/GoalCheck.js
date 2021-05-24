/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import {
  Text, TextInput, View, SectionList,
} from 'react-native';
import styled from 'styled-components';
import moment from 'moment';
import { BehaviorlyContext } from './context/BehaviorContext.jsx';

const Search = styled.TextInput`
  width: 200px;
  margin: 12px;
  borderBottomWidth: 1px;
  background-color: white;
`;

const ListContainer = styled.View`
  justifyContent: flex-end;
`;

const Met = styled.Text`
  width: 50px;
  height: 50px;
  padding-top: 13px;
  textAlign: center;
`;

const Header = styled.Text`
  flex: 1;
  fontSize: 20px;
  padding: 0;
`;

const GoalCheck = ({ check, setCheck }) => {
  const { clientGoalList, clientList, person } = useContext(BehaviorlyContext);
  const [clientGoals, setClientGoals] = clientGoalList;
  const [clients, setClients] = clientList;
  const [clientName, setClientName] = person;
  const [inputContainer, setInputContainer] = useState([]);
  const [input, setInput] = useState('');

  const addToContainer = (title, status) => {
    const inputValue = { goal: title, status };
    if (inputValue.goal === undefined) {
      setInputContainer((oldInputContainer) => [...oldInputContainer, inputValue]);
    }
  };

  // const addEntry = () => {
  //   const date = new Date();
  //   const entry = {
  //     title: input,
  //     date: moment(date).format('MMMM Do YYYY'),
  //     goals: inputContainer,
  //   };
  //   clientGoals((oldGoals) => ({ ...oldGoals, [clientName]: { currentGoals: } }));
  // };

  const List = () => (
    clients.map((client) => (
      client.name === clientName ? client.goals.map((entry, j) => (
        <SectionList
          key={j}
          sections={[
            {
              title: entry,
              data: [
                { name: 'Met', colorCode: '#82F7BC' },
                { name: 'Not Met', colorCode: '#FB3134' },
                { name: 'N/A', colorCode: '#7ABEFF' },
              ],
            },
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Met
                onPress={() => addToContainer(entry, item.name)}
                style={{ flex: 1, backgroundColor: item.colorCode }}
              >
                {item.name}
              </Met>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Header onPress={() => console.log('this is', inputContainer)}>{section.title}</Header>
          )}
        />
      )) : null
    )));

  return (
    <View>
      <Search
        placeholder="Brief summarized title"
        onChangeText={(title) => setInput(title)}
      />
      <List />
      <Text onPress={() => setCheck(!check)}>{'I\'m all done!'}</Text>
    </View>
  );
};

export default GoalCheck;

// <Text>{entry}</Text>
// <Text style={{ style: 1 }} onPress={() => console.log('hello')}>Met</Text>
// <Text onPress={() => console.log('goodbye')}>Not Met</Text>
// <Text onPress={() => console.log('what up')}>N/A</Text>
