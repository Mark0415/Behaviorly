/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import {
  Text, TextInput, View, SectionList, ScrollView, ImageBackground,
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
  height: 100px;
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

const ButtonContainer = styled.TouchableOpacity`
  background-color: #989bb3;
  border: 2px solid #5feafa;
  border-radius: 20px;
  padding: 15px;
  position: absolute;
  height: 60px;
  width: 200px;
  bottom: 20px;
`;

const Button = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Background = styled.ImageBackground`
  width: 200px;
`;

const GoalCheck = ({ check, setCheck }) => {
  const { clientGoalList, clientList, person } = useContext(BehaviorlyContext);
  const [, setClientGoals] = clientGoalList;
  const [clients] = clientList;
  const [clientName] = person;
  const [inputContainer, setInputContainer] = useState([]);
  const [input, setInput] = useState('');

  const addToContainer = (title, status) => {
    const inputValue = { goal: title, status };
    setInputContainer((oldInputContainer) => [...oldInputContainer, inputValue]);
  };

  const addEntry = () => {
    const date = new Date();
    const entry = {
      title: input,
      date: moment(date).format('MMMM Do YYYY'),
      goals: inputContainer,
    };
    setClientGoals((prevGoals) => ({
      ...prevGoals,
      [clientName]: {
        ...prevGoals[clientName], currentGoals: [...prevGoals[clientName].currentGoals, entry],
      },
    }));
    console.log('this is entry', entry);
  };

  console.log(input);
  console.log('this is container', inputContainer);
  // console.log('this is clientGoals', clientGoals['Annika'].currentGoals);

  const List = () => (
    clients.map((client, i) => (
      client.name === clientName ? client.goals.map((entry, j) => (
        <SectionList
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
            <View style={{ flexDirection: 'column' }}>
              <Met
                onPress={() => addToContainer(entry, item.name)}
                style={{ flex: 1, backgroundColor: item.colorCode, borderRadius: 20 }}
              >
                {item.name}
              </Met>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Header>{section.title}</Header>
          )}
        />
      )) : null
    )));

  const completeForm = () => {
    addEntry();
    setCheck(!check);
  };

  return (
    <View>
      <ListContainer>
        <Search
          placeholder="Brief summarized title"
          onChangeText={(title) => setInput(title)}
        />
      </ListContainer>
      <List />
      <ButtonContainer>
        <Button onPress={completeForm}>{'I\'m all done!'}</Button>
      </ButtonContainer>
    </View>
  );
};

export default GoalCheck;

// <Text>{entry}</Text>
// <Text style={{ style: 1 }} onPress={() => console.log('hello')}>Met</Text>
// <Text onPress={() => console.log('goodbye')}>Not Met</Text>
// <Text onPress={() => console.log('what up')}>N/A</Text>
