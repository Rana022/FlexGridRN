import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App({navigation, title}) {
  return (
    <View style={styles.container}>
      <Text style={{color: '#691d43', fontFamily: 'bold', fontSize: 18}}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
