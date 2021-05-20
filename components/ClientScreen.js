/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';
import GoalCreate from './GoalCreate';
import ClientGoals from './ClientGoals';

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

const ClientScreen = ({
  clientGoals, setModalVisible, setNewClient, modalVisible, newClient, setClientGoals,
}) => {
  const [namePlaceholder, setNamePlaceholder] = useState('');
  const [clientVisible, setClientVisible] = useState(false);
  const List = () => clientGoals.map((client, i) => (
    <Text
      key={i}
      onPress={() => {
        setClientVisible(!clientVisible);
        setNamePlaceholder(client.name);
      }}
    >
      {client.name}
    </Text>
  ));

  if (clientVisible === false) {
    return (
      <View>
        <View>
          <Text>Add a new client</Text>
          <TextInput
            style={styles.search}
            placeholder="enter name"
            onChangeText={(name) => setNewClient(name)}
          />
        </View>
        <Icon
          reverse
          name="add"
          type="material"
          color="#1e96eb"
          onPress={() => setModalVisible(true)}
        />
        {modalVisible === true ? (
          <GoalCreate
            modalVisible={modalVisible}
            newClient={newClient}
            setModalVisible={setModalVisible}
            setNewClient={setNewClient}
            setClientGoals={setClientGoals}
          />
        ) : console.log(clientGoals) }
        <List />
      </View>
    );
  }
  return (
    <ClientGoals
      clientVisible={clientVisible}
      setClientVisible={setClientVisible}
      clientGoals={clientGoals}
      client={namePlaceholder}
    />
  );
};

export default ClientScreen;
