/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import {
  View, Text, TextInput, ImageBackground, TouchableOpacity,
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
  top: 140px;
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
  top: 140px;
  left: 100px;
  padding: 10px;
  height: 40px;
  width: 200px;
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
  font-size: 20px;
  padding: 20px;
  margin: 20px;
  border: 2px solid black;
  border-radius: 50px;
  backgroundColor: #a465e6;
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
        <Text key={j}>{entry}</Text>
      </View>
    )) : null
  ));

  const List = () => clients.map((client, i) => (
    <Item
      key={i}
      onPress={() => {
        setClientVisible(!clientVisible);
        setClientName(client.name);
        goalTrack(client.name);
      }}
    >
      {client.name}
    </Item>
  ));

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
  return (
    <ClientGoals />
  );
};

export default ClientScreen;
