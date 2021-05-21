/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import {
  View, Text, TextInput, ImageBackground, TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import GoalCreate from './GoalCreate';
import ClientGoals from './ClientGoals';

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     backgroundColor: '#695380',
//   },
//   header: {
//     flexDirection: 'row',
//   },
//   background: {
//     flex: 1,
//   },
//   names: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     width: '100%',
//     fontSize: 45,
//     padding: 20,
//     margin: 20,
//     borderWidth: 1,
//     borderRadius: 25,
//     borderColor: 'black',
//     backgroundColor: '#a465e6',
//   },
//   button: {
//     position: 'absolute',
//     right: 0,
//     color: 'white',
//     alignItems: 'center',
//     backgroundColor: '#2c0078',
//     height: 40,
//     width: 40,
//     borderRadius: 25,
//     padding: 10,
//   },
//   search: {
//     padding: 10,
//     height: 40,
//     width: 200,
//     margin: 12,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 6,
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   modalView: {
//     backgroundColor: 'white',
//     height: '100%',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
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

const Hi = styled.TouchableOpacity`
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

const ClientScreen = ({
  clientGoals, setModalVisible, setNewClient, modalVisible,
  newClient, setClientGoals,
}) => {
  const [namePlaceholder, setNamePlaceholder] = useState('');
  const [clientVisible, setClientVisible] = useState(false);
  const [goalsMet] = useState([]);

  const goalTrack = (name) => clientGoals.map((client, i) => (
    client.name === name
      ? client.goals.map((entry, j) => (
        <View key={i}>
          <Text key={j}>{entry}</Text>
        </View>
      ))
      : null
  ));
  const List = () => clientGoals.map((client, i) => (
    <Item
      key={i}
      onPress={() => {
        setClientVisible(!clientVisible);
        setNamePlaceholder(client.name);
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
            newClient={newClient}
            setModalVisible={setModalVisible}
            setNewClient={setNewClient}
            setClientGoals={setClientGoals}
          />
        ) : null }
        <ListContainer>
          <List />
        </ListContainer>
      </Container>
    );
  }
  return (
    <ClientGoals
      clientVisible={clientVisible}
      setClientVisible={setClientVisible}
      clientGoals={clientGoals}
      goalsMet={goalsMet}
      client={namePlaceholder}
    />
  );
};

export default ClientScreen;
