import React from 'react';
import 'react-native-gesture-handler';
import Home from './Components/Home';
import AddReunion from './Components/AddReunion'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createAppContainer} from '@react-navigation/native'
import { Header } from 'react-native-elements'




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="AddReunion"  component={AddReunion} />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}
