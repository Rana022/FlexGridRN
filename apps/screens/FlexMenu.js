import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import {flexContents} from '../contents/FlexContents';

export default function App({navigation}) {
  console.log(flexContents);
  return (
    <ScrollView>
    <View style={globalStyles.boxContainer}>
          {flexContents.map((item) => {
             return(
             <TouchableOpacity
             onPress={() => {navigation.navigate('FlexDetails', item)}}
             key={item.key.toString()} 
             style={globalStyles.box}>
             <Text>{item.title}</Text>
             </TouchableOpacity>
             )
          })}
    </View  >
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
