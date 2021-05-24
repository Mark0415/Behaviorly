/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View } from 'react-native';
import ClientScreen from './ClientScreen';
import ClientsGoals from './ClientGoals';
import BehaviorlyProvider from './context/BehaviorContext.jsx';

const Bundle = () => (
  <BehaviorlyProvider>
    <ClientScreen />
  </BehaviorlyProvider>
);

export default Bundle;
