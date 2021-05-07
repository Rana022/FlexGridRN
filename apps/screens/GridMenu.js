import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';


export default function App() {
  return (
    <View style={globalStyles.detailsContainer}>
    <View style={[{},globalStyles.detailsBox]}>
      <Text style={{fontFamily: 'regular', fontSize: 16, textAlign: 'center', paddingHorizontal: 20}}>This Application is all about CSS Flexbox.We have talked about very basic to advance with effective images.</Text>
      <Text style={{fontFamily: 'regular', fontSize: 12, textAlign: 'center', marginTop: 'auto'}}>
          <Text>Author/Developer-</Text>
          <Text style={{fontFamily: 'italic', color: '#fd8383'}} onPress={() => Linking.openURL("https://github.com/Rana022")}>Rana Ghosh</Text>
        </Text>
    </View >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
