/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Text, TextInput, View, SectionList,
} from 'react-native';
import styled from 'styled-components';

const Search = styled.TextInput`
  width: 200px;
  margin: 12px;
  borderBottomWidth: 1px;
  background-color: white;
`;

const ListContainer = styled.View`
  justifyContent: flex-end;
`;

const Met = styled.Text`
  width: 50px;
  height: 50px;
  padding-top: 13px;
  textAlign: center;
`;

const Header = styled.Text`
  flex: 1;
  fontSize: 20px;
  padding: 0;
`;

const GoalCheck = ({ clientGoals, check, setCheck }) => {
  const List = () => clientGoals[0].goals.map((entry, i) => (
    <View
      style={[{ flex: 1, padding: 0 }, { flexDirection: 'row' }]}
      key={i}
    >
      <SectionList
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
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 10 }}>
            <Met
              onPress={() => console.log(item)}
              style={{ backgroundColor: item.colorCode }}
            >
              {item.name}
            </Met>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Header>{section.title}</Header>
        )}
      />
    </View>
  ));
  return (
    <View>
      <Search
        placeholder="Brief summarized title"
        style={{ flex: 1 }}
      />
      <List />
      <Text onPress={() => setCheck(!check)}>{'I\'m all done!'}</Text>
    </View>
  );
};

export default GoalCheck;

// <Text>{entry}</Text>
// <Text style={{ style: 1 }} onPress={() => console.log('hello')}>Met</Text>
// <Text onPress={() => console.log('goodbye')}>Not Met</Text>
// <Text onPress={() => console.log('what up')}>N/A</Text>
