import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FlexStack from './FlexStack';
import GridStack from './GridStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Flex') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'md-checkmark-circle' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color='#691d43' />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fd8383',
        inactiveTintColor: '#691d43',
      }}
      >
        <Tab.Screen name="Flex" component={FlexStack} />
        <Tab.Screen name="About" component={GridStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}