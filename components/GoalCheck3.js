/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components';
import { SectionGrid, FlatGrid } from 'react-native-super-grid';

const Search = styled.TextInput`
  width: 200px;
  margin: 12px;
  borderBottomWidth: 1px;
  background-color: white;
`;

const ListContainer = styled.View`
  justifyContent: flex-end;
`;

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
`;

const Button = styled.Text`
  padding-top: 15px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
`;

const ButtonDone = styled.Text`
  padding-top: 15px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Header = styled.Text`
  flex: 1;
  fontSize: 20px;
  padding: 0;
`;

const GoalCheck = ({
  clientGoals, check, setCheck,
}) => {
  const List = () => clientGoals[0].goals.map((entry, i) => (
    <SectionGrid
      key={i}
      itemDimension={60}
      sections={[
        {
          title: entry,
          data: [
            { name: 'Met', colorCode: '#82F7BC' },
            { name: 'Not Met', colorCode: '#FB3134' },
            { name: 'N/A', colorCode: '#7ABEFF' },
          ],
        },
      ]}
      renderItem={({ item }) => (
        <ButtonContainer>
          <Button
            onPress={() => console.log(item)}
            style={{ backgroundColor: item.colorCode }}
          >
            {item.name}
          </Button>
        </ButtonContainer>
      )}
      renderSectionHeader={({ section }) => (
        <Header>
          {section.title}
        </Header>
      )}
    />
  ));
  return (
    <ListContainer
      style={[{ style: 1, padding: 0 }, { flexDirection: 'column' }]}
    >
      <View style={{ flex: 4 }} />
      <Search
        placeholder="Brief summarized title"
        style={{ flex: 1 }}
      />
      <List style={{ flex: 1 }} />
      <ButtonDone onPress={() => setCheck(!check)}>{'I\'m all done!'}</ButtonDone>
    </ListContainer>
  );
};

export default GoalCheck;

// <Text>{entry}</Text>
// <Text style={{ style: 1 }} onPress={() => console.log('hello')}>Met</Text>
// <Text onPress={() => console.log('goodbye')}>Not Met</Text>
// <Text onPress={() => console.log('what up')}>N/A</Text>
