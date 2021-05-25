/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import {
  View, Text, TextInput, ImageBackground, TouchableOpacity, ScrollView,
} from 'react-native';
import styled from 'styled-components';
import GoalCreate from './GoalCreate';
import ClientGoals from './ClientGoals';
import { BehaviorlyContext } from './context/BehaviorContext.jsx';

const Container = styled.View`
  display: flex;
  background-color: white;
`;

const Background = styled.ImageBackground`
  height: 300px;
  width: 410px;
`;

const Title = styled.Text`
  position: absolute;
  padding: 10px;
  top: 70px;
  font-size: 50px;
  color: white;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 160px;
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

const Search = styled.TextInput`
  position: absolute;
  top: 160px;
  left: 100px;
  padding: 10px;
  height: 40px;
  width: 250px;
  margin: 12px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`;

const ListContainer = styled.View`
  flex: 2;
`;

const Item = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding: 20px;
  margin: 20px;
  border-radius: 50px;
  background-color: #989bb3;
  border: 2px solid #5feafa;
`;

const Entry = styled.Text`
  font-size: 20px;
  text-align: left;
`;

const ClientScreen = () => {
  const { clientList, visible, person } = useContext(BehaviorlyContext);
  const [clients] = clientList;
  const [clientVisible, setClientVisible] = visible;
  const [, setClientName] = person;
  const [newClient, setNewClient] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const goalTrack = (name) => clients.map((client, i) => (
    client.name === name ? client.goals.map((entry, j) => (
      <View key={i}>
        <Entry key={j}>{entry}</Entry>
      </View>
    )) : null
  ));

  const List = () => clients.map((client, i) => (
    <Item
      key={i}
      keyExtractor={(item, index) => item + index}
      onPress={() => {
        setClientVisible(!clientVisible);
        setClientName(client.name);
        goalTrack(client.name);
      }}
    >
      {client.name}
    </Item>
  ));

  const addHandler = () => {
    setModalVisible(true);
    setNewClient('');
  };

  if (clientVisible === false) {
    return (
      <Container>
        <Background source={require('../assets/background.png')}>
          <View>
            <Title>Behaviorly</Title>
            <View>
              <Search
                placeholder="enter name"
                onChangeText={(name) => setNewClient(name)}
                value={newClient}
              />
              <Button onPress={() => setModalVisible(true)}>
                <ButtonText>+</ButtonText>
              </Button>
            </View>
          </View>
        </Background>

        {modalVisible === true ? (
          <GoalCreate
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            newClient={newClient}
            setNewClient={setNewClient}
          />
        ) : null }
        <ListContainer>
          <List />
        </ListContainer>
      </Container>
    );
  }
  console.log('THIS IS CLIENT SCREEN');

  return (
    <ClientGoals />
  );
};

export default ClientScreen;
