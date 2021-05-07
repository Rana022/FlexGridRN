import React from 'react';
import { Text, View , TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import {flexContents} from '../contents/FlexContents';

export default function App({navigation}) {
  return (
    <ScrollView>
    <View style={globalStyles.boxContainer}>
          {flexContents.map((item) => {
             return(
             <TouchableOpacity
             onPress={() => {navigation.navigate('FlexDetails', item)}}
             key={item.key.toString()} 
             style={globalStyles.box}>
             <Text style={{fontFamily: 'regular', fontSize: 16, textAlign: 'center'}}>{item.title}</Text>
             </TouchableOpacity>
             )
          })}
    </View  >
    </ScrollView>
  );
}
