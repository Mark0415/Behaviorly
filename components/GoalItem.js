/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import {
  Text, View, Modal, StyleSheet, ImageBackground, TouchableOpacity,
} from 'react-native';
import { BehaviorlyContext } from './context/BehaviorContext.jsx';
import styled from 'styled-components';

const styles = StyleSheet.create({
  search: {
    padding: 10,
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const Date = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  text-align: right;
`;

const Entry = styled.Text`
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const Met = styled.Text`
  background-color: #989bb3;
  border: 2px solid #5feafa;
  color: white;
  left: 170px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  padding-top: 20px;
  height: 60px;
  width: 60px;
`;

const Button = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 20px;
  text-align: center;
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

const Background = styled.ImageBackground`
  width: 410px;
  height: 900px;
`;

const GoalItem = ({
  modalGoal, setModalGoal, date, setDate,
}) => {
  const { clientGoalList, person } = useContext(BehaviorlyContext);
  const [clientName] = person;
  const [clientGoals] = clientGoalList;

  const ShowGoals = () => clientGoals[clientName].currentGoals.map((entry, i) => (
    entry.date === date ? (
      <Background key={i} source={require('../assets/background.png')}>
        <Date>{entry.date}</Date>
        <Title>{entry.title}</Title>
        {entry.goals.map((items, j) => (
          <View key={j}>
            <Entry>{items.goal}</Entry>
            <Met>{items.status}</Met>
          </View>
        ))}
      </Background>
    ) : null));

  return (
    <Modal
      animationType="slide"
      transparent
      visible
      onRequestClose={() => setModalGoal(false)}
    >
      <View style={styles.modalView}>
        <ShowGoals />
        <ButtonContainer style={styles.modalText} onPress={() => setModalGoal(false)}>
          <Button>Go Back</Button>
        </ButtonContainer>
      </View>
    </Modal>
  );
};

export default GoalItem;
