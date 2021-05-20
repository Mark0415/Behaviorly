/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View } from 'react-native';
import ClientScreen from './ClientScreen';

const Bundle = () => {
  const [clientData] = useState([
    {
      client: 'Annika',
      goals: [
        { check: 'met', goal: 'Bear claw gummies chocolate wafer jelly. Lollipop danish wafer oat cake donut candy bonbon jujubes. Liquorice lemon drops cookie brownie.' },
        { check: 'not met', goal: 'Gummi bears muffin candy croissant wafer tart cake. Chocolate cake biscuit tiramisu. Cheesecake topping brownie ice cream dessert bear claw marzipan bear claw.' },
        { check: 'n/a', goal: 'Fruitcake chocolate cake pudding oat cake. Tart croissant pie dessert sweet roll sugar plum gummies. Pudding topping pastry soufflé.' },
        { check: 'met', goal: 'Gummi bears jelly toffee lemon drops marzipan jelly-o tart toffee. Dessert macaroon sweet roll tootsie roll carrot cake sweet pastry. Candy canes pudding candy canes.' },
      ],
    },
    {
      client: 'Kathleen',
      goals: [
        { check: 'met', goal: 'Bear claw gummies chocolate wafer jelly. Lollipop danish wafer oat cake donut candy bonbon jujubes. Liquorice lemon drops cookie brownie.' },
        { check: 'n/a', goal: 'Gummi bears muffin candy croissant wafer tart cake. Chocolate cake biscuit tiramisu. Cheesecake topping brownie ice cream dessert bear claw marzipan bear claw.' },
        { check: 'n/a', goal: 'Fruitcake chocolate cake pudding oat cake. Tart croissant pie dessert sweet roll sugar plum gummies. Pudding topping pastry soufflé.' },
        { check: 'met', goal: 'Gummi bears jelly toffee lemon drops marzipan jelly-o tart toffee. Dessert macaroon sweet roll tootsie roll carrot cake sweet pastry. Candy canes pudding candy canes.' },
      ],
    },
    {
      client: 'Ramon',
      goals: [
        { check: 'met', goal: 'Bear claw gummies chocolate wafer jelly. Lollipop danish wafer oat cake donut candy bonbon jujubes. Liquorice lemon drops cookie brownie.' },
        { check: 'met', goal: 'Gummi bears muffin candy croissant wafer tart cake. Chocolate cake biscuit tiramisu. Cheesecake topping brownie ice cream dessert bear claw marzipan bear claw.' },
        { check: 'met', goal: 'Fruitcake chocolate cake pudding oat cake. Tart croissant pie dessert sweet roll sugar plum gummies. Pudding topping pastry soufflé.' },
        { check: 'met', goal: 'Gummi bears jelly toffee lemon drops marzipan jelly-o tart toffee. Dessert macaroon sweet roll tootsie roll carrot cake sweet pastry. Candy canes pudding candy canes.' },
      ],
    },
  ]);

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
