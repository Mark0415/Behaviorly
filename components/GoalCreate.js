/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import {
  StyleSheet, Text, View, Modal, Alert,
  TextInput, FlatList,
} from 'react-native';

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

const GoalCreate = ({
  modalVisible, setModalVisible, newClient, setClientGoals,
}) => {
  const [goalList, setGoalList] = useState([]);
  const [goal, setGoal] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent
      visible
      onRequestClose={() => {
        Alert.alert('Modal has been closed');
        setModalVisible(!modalVisible);
      }}
    >

      <View style={styles.modalView}>
        <Text style={styles.modalText}>{`Goals for ${newClient}`}</Text>
        <TextInput
          style={styles.search}
          placeholder="What's your goal?"
          onChangeText={(newGoal) => setGoal(newGoal)}
        />
        <Icon
          reverse
          name="add"
          type="material"
          color="#1e96eb"
          onPress={() => {
            setGoalList((oldGoals) => [...oldGoals, goal]);
          }}
        />
        <Text
          onPress={() => {
            setModalVisible(!modalVisible);
            setClientGoals((oldClientGoals) => [
              ...oldClientGoals, { name: newClient, goals: goalList },
            ]);
            Alert.alert('Thank\'s for the post!');
          }}
        >
          Submit
        </Text>
        <View>
          <FlatList
            data={goalList}
            renderItem={({ item }) => (
              <Text>{item}</Text>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalCreate;
