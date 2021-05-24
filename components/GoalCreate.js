/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import {
  StyleSheet, Text, View, Modal,
  TextInput, FlatList,
} from 'react-native';
import styled from 'styled-components';
import { BehaviorlyContext } from './context/BehaviorContext.jsx';

const styles = StyleSheet.create({
  search: {
    padding: 10,
    height: 40,
    width: 200,
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
  backgroundColor: #989bb3;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  padding: 10px;
  border: 2px solid #5feafa;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-align: center
`;

const GoalCreate = ({
  modalVisible, setModalVisible, newClient,
}) => {
  const { clientList, clientGoalList } = useContext(BehaviorlyContext);
  const [, setClients] = clientList;
  const [, setClientGoals] = clientGoalList;
  const [goalList, setGoalList] = useState([]);
  const [goal, setGoal] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent
      visible
      onRequestClose={() => setModalVisible(!modalVisible)}
    >

      <View style={styles.modalView}>
        <Text style={styles.modalText}>{`Goals for ${newClient}`}</Text>
        <TextInput
          style={styles.search}
          placeholder="What's your goal?"
          onChangeText={(newGoal) => setGoal(newGoal)}
        />

        <Button onPress={() => {
          setModalVisible(true);
          setGoalList((oldGoal) => ([...oldGoal, goal]));
        }}
        >
          <ButtonText>+</ButtonText>
        </Button>

        <Text
          onPress={() => {
            setModalVisible(!modalVisible);
            setClients((oldClientGoals) => [
              ...oldClientGoals, { name: newClient, currentGoals: [], goals: goalList },
            ]);
            setClientGoals((oldGoals) => ({
              ...oldGoals, [newClient]: { currentGoals: [] },
            }));
          }}
        >
          Submit
        </Text>
        <View>
          <FlatList
            data={goalList}
            renderItem={({ item }) => (
              <Text>{item}</Text>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalCreate;
