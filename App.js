/* eslint-disable react/jsx-filename-extension */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Bundle from './components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const App = () => (
  <View style={styles.container}>
    <Bundle />
    <StatusBar />
  </View>
);

export default App;
