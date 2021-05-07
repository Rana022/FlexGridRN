// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FlexMenu from '../screens/FlexMenu';
import FlexDetails from '../screens/FlexDetails';
import Header from '../screens/share/Header';
const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="FlexMenu" component={FlexMenu}
        options={ () => {
          return {
           headerTitle: () => <Header title='Flexbox' />
          }
        } }
        />
        <Stack.Screen
         name="FlexDetails"
         component={FlexDetails}
         options={
          {
            title: 'Flexbox'
          }
        }
          />
      </Stack.Navigator>
  );
}

export default App;