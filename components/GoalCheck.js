/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, View } from 'react-native';

const GoalCheck = ({ client }) => (
  <View>
    <Text>{`How did ${client} do on her goals?`}</Text>
  </View>
);

export default GoalCheck;
