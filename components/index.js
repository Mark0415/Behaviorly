/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View } from 'react-native';
import ClientScreen from './ClientScreen';
import ClientsGoals from './ClientGoals';

const Bundle = () => {
  const [clientGoals, setClientGoals] = useState([
    {
      name: 'Annika',
      goals: ['Don\'t eat so much', 'wash hands', 'don\'t take things too personal'],
    },
    {
      name: 'Kathleen',
      goals: ['Use the bathroom without prompting', 'call mom during lunch', 'don\'t mess with staff'],
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [clientVisible, setClientVisible] = useState(false);
  const [newClient, setNewClient] = useState('');

  // const handleAdd = (client) => {
  //   setClientData([
  //     ...clientData, client,
  //   ]);
  // };
  return (
    <View>
      <ClientScreen
        clientGoals={clientGoals}
        modalVisible={modalVisible}
        newClient={newClient}
        setModalVisible={setModalVisible}
        setNewClient={setNewClient}
        setClientGoals={setClientGoals}
      />
    </View>
  );
};

export default Bundle;
