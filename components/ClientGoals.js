/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import GoalCheck from './GoalCheck';

const ClientGoals = ({
  client, clientVisible, setClientVisible, clientGoals,
}) => {
  const [stateThing, useStateThing] = useState(null);
  return (
    <View>
      <Text onPress={() => setClientVisible(!clientVisible)}>{client}</Text>
      <GoalCheck
        clientGoals={clientGoals}
        client={client}
      />
    </View>
  );
};

export default ClientGoals;
