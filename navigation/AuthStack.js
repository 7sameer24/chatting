import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SignScreen from '../Screens/SignScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignScreen" component={SignScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
