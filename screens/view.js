import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Header } from 'react-native-elements';

export default class ViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
     };
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
   render(){
    const { search } = this.state;
    return (
    <View >
     <Header containerStyle={{backgroundColor: 'black', height: 70,}}
      centerComponent={{ text: 'PREVIEW', style: { color: '#fff', fontSize: 30, fontWeight: 'bold' } }}
      rightComponent={{ icon: 'search', color: '#fff' }}
     />
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});