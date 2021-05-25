/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import {
  StyleSheet, Text, View, Modal,
  TextInput, FlatList, ImageBackground, TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import { BehaviorlyContext } from './context/BehaviorContext.jsx';

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

const Button = styled.TouchableOpacity`
  position: absolute;
  top: 170px;
  right: 40px;
  backgroundColor: #989bb3;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  padding: 10px;
  border: 2px solid #5feafa;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: center
`;

const Title = styled.Text`
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

const Name = styled(Title)`
  font-size: 60px;
`;

const Background = styled.ImageBackground`
  height: 300px;
  width: 410px;
`;

const Search = styled.TextInput`
  position: absolute;
  top: 170px;
  left: 10px;
  padding: 10px;
  height: 40px;
  width: 30px;
  margin: 12px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`;

const SubmitPress = styled.TouchableOpacity`
  position: absolute;
  top: 295px;
`;

const SubmitText = styled.Text`
  font-size: 35px;
  background-color: #989bb3;
  border: 2px solid #5feafa;
  border-radius: 10px;
  width: 410px;
  color: white;
  text-align: center;
`;

const Goal = styled.Text`
  font-size: 20px;
  padding: 10px;
`;

const GoalCreate = ({
  modalVisible, setModalVisible, newClient, setNewClient,
}) => {
  const { clientList, clientGoalList } = useContext(BehaviorlyContext);
  const [, setClients] = clientList;
  const [, setClientGoals] = clientGoalList;
  const [goalList, setGoalList] = useState([]);
  const [goal, setGoal] = useState('');
  console.log('THIS IS GOAL CREATAE');

  return (
    <Modal
      animationType="slide"
      transparent
      visible
      onRequestClose={() => setModalVisible(!modalVisible)}
    >

      <View style={styles.modalView}>
        <Background source={require('../assets/background.png')}>
          <Title style={styles.modalText}>{`Goals for`}</Title>
          <Name>{newClient}</Name>
          <Search
            style={styles.search}
            placeholder="What's your goal?"
            onChangeText={(newGoal) => setGoal(newGoal)}
            value={goal}
          />

          <Button onPress={() => {
            setModalVisible(true);
            setGoalList((oldGoal) => ([...oldGoal, goal]));
            setGoal('');
          }}
          >
            <ButtonText>+</ButtonText>
          </Button>
        </Background>

        <SubmitPress
          onPress={() => {
            setModalVisible(!modalVisible);
            setClients((oldClientGoals) => [
              ...oldClientGoals, { name: newClient, currentGoals: [], goals: goalList },
            ]);
            setClientGoals((oldGoals) => ({
              ...oldGoals, [newClient]: { currentGoals: [] },
            }));
            setNewClient('');
          }}
        >
          <SubmitText>Submit</SubmitText>
        </SubmitPress>
        <View>
          <FlatList
            data={goalList}
            renderItem={({ item }) => (
              <Goal>{item}</Goal>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalCreate;
