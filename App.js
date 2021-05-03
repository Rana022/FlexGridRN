import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import Navigation from './apps/routes/TabNavigation';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


export default function App() {
  //load fonts
const [loadFonts, setloadFonts] = useState(false);
//getfonts
const getFonts = () => Font.loadAsync({
  'regular' : require('./assets/fonts/Nunito-Regular.ttf'),
  'bold' : require('./assets/fonts/Nunito-Bold.ttf'),
  'italic' : require('./assets/fonts/Nunito-Italic.ttf')
});
//first executing function
useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

 if(loadFonts){
   //navigation screen
   return (
    <Navigation />
   );
 }else{
  return(
    <AppLoading
        startAsync={getFonts}
        onFinish={() => setloadFonts(true)}
        onError={console.warn}
      />
  )
 }
}
