import React from 'react';
import styled from 'styled-components';
import {
  Text, TextInput, View, SectionList,
} from 'react-native';

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

module.exports = {
  Search, ListContainer, Met, Header,
};
