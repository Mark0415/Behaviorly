/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Text, View, ImageBackground } from 'react-native';
import GoalCheck from './GoalCheck';

const Name = styled.Text`
  padding-top: 40px;
  padding-left: 20px;
  font-size: 50px;
`;

const CGHeader = styled.TouchableOpacity`
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  borderBottomColor: black;
`;

const ListContainer = styled.View`
  padding: 20px;
  margin: 10px;
  border: 1px solid #989bb3;
  background: rgba(255, 255, 255, 0.4);
`;

const ListText = styled.Text`
  font-size: 15px;
  color: black;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 30px;
  backgroundColor: #989bb3;
  height: 100px;
  width: 200px;
  border-radius: 30px;
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #5feafa;
`;

const ButtonText = styled.Text`
  color: white;
  padding-top: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center
`;

const ClientGoals = ({
  client, clientVisible, setClientVisible, clientGoals,
}) => {
  const [entries, setEntries] = useState([
    {
      title: 'Volunteer Work/Art Class',
      date: '5/12/2021',
      goalList: {
        goalOne: {
          goal: 'Don\'t eat too much',
          status: 'N/A',
        },
        goalTwo: {
          goal: 'Wash hands',
          status: 'Met',
        },
        goalThree: {
          goal: 'Don\'t take things too personal',
          status: 'N/A',
        },
      },
    },
    {
      title: 'Exercise at Lake Merrit/ Oakland Library Tutor',
      date: '5/11/2021',
      goalList: {
        goalOne: {
          goal: 'Don\'t eat too much',
          status: 'N/A',
        },
        goalTwo: {
          goal: 'Wash hands',
          status: 'Met',
        },
        goalThree: {
          goal: 'Don\'t take things too personal',
          status: 'N/A',
        },
      },
    },
  ]);
  const [check, setCheck] = useState(false);
  const [color, setColor] = useState(false);

  const EntryList = () => entries.map((entry, i) => (
    <View key={i}>
      <ListContainer>
        <ListText>{entry.date}</ListText>
        <ListText>{entry.title}</ListText>
      </ListContainer>
    </View>
  ));
  if (check === false) {
    return (
      <ImageBackground
        style={[{ flex: 1, padding: 0, width: 450 }, { flexDirection: 'column' }]}
        source={require('../assets/background.png')}
      >
        <CGHeader>
          <Name onPress={() => setClientVisible(!clientVisible)}>{client}</Name>
          <Button
            onPress={() => setCheck(!check)}
            onPressIn={() => setColor(true)}
            onPressOut={() => setColor(false)}
          >
            <ButtonText>New Goal +</ButtonText>
          </Button>
        </CGHeader>
        <EntryList />
      </ImageBackground>
    );
  }
  return (
    <GoalCheck
      clientGoals={clientGoals}
      client={client}
      check={check}
      setCheck={setCheck}
    />
  );
};

// const styles = StyleSheet.create({

// });

export default ClientGoals;

// onPress={() => setCheck(!check)}
