// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GridMenu from '../screens/GridMenu';
import GridDetails from '../screens/GridDetails';
import Header from '../screens/share/Header';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="GridMenu" component={GridMenu} 
        options={ () => {
          return {
           headerTitle: () => <Header title='about' />
          }
        } }
        />
        <Stack.Screen name="GridDetails" component={GridDetails} />
      </Stack.Navigator>
  );
}

export default App;