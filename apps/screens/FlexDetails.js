import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function App({route}) {

  switch(route.params.title){
    case "Introduction":
      return(
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text>{route.params.details}</Text>
        <Text>{route.params.title}</Text>
      </View>
      </View>
      );
      break;
      default:
        return (
          <View style={globalStyles.detailsContainer}>
            <View style={globalStyles.detailsBox}>
            <Text>hello</Text>
            </View>
          </View>
        );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
