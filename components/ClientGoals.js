/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { BehaviorlyContext } from './context/BehaviorContext.jsx';
import GoalCheck from './GoalCheck';
import GoalItem from './GoalItem';

const Name = styled.Text`
  padding-top: 40px;
  padding-left: 20px;
  font-size: 50px;
`;

const CGHeader = styled.TouchableOpacity`
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  borderBottomColor: black;
`;

const ListContainer = styled.View`
  padding: 20px;
  margin: 10px;
  border: 1px solid #989bb3;
  background: rgba(255, 255, 255, 0.4);
`;

const ListText = styled.Text`
  font-size: 15px;
  color: black;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 30px;
  backgroundColor: #989bb3;
  height: 100px;
  width: 200px;
  border-radius: 30px;
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #5feafa;
`;

const ButtonText = styled.Text`
  color: white;
  padding-top: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center
`;

const ClientGoals = () => {
  const { clientGoalList, visible, person } = useContext(BehaviorlyContext);
  const [clientVisible, setClientVisible] = visible;
  const [clientName] = person;
  const [clientGoals] = clientGoalList;
  const [check, setCheck] = useState(false);
  const [modalGoal, setModalGoal] = useState(false);
  const [date, setDate] = useState('');

  const goals = clientGoals[clientName].currentGoals;

  const EntryList = () => goals.map((entry, i) => (
    <TouchableOpacity
      key={i}
      onPress={() => {
        setModalGoal(!modalGoal);
        setDate(entry.date);
      }}
    >
      <ListContainer>
        <ListText>{entry.date}</ListText>
        <ListText>{entry.title}</ListText>
      </ListContainer>
    </TouchableOpacity>
  ));

  if (modalGoal === true) {
    return (
      <GoalItem
        date={date}
        modalGoal={modalGoal}
        setDate={setDate}
        setModalGoal={setModalGoal}
      />
    );
  }

  if (check === false) {
    return (
      <ImageBackground
        style={[{ flex: 1, padding: 0, width: 450 }, { flexDirection: 'column' }]}
        source={require('../assets/background.png')}
      >
        <CGHeader>
          <Name onPress={() => setClientVisible(!clientVisible)}>{clientName}</Name>
          <Button
            onPress={() => setCheck(!check)}
          >
            <ButtonText>New Goal +</ButtonText>
          </Button>
        </CGHeader>
        <EntryList />
      </ImageBackground>
    );
  }
  return (
    <GoalCheck
      check={check}
      setCheck={setCheck}
    />
  );
};

// const styles = StyleSheet.create({

// });

export default ClientGoals;

// onPress={() => setCheck(!check)}
