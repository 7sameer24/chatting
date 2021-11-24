import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import Tabs from './tabs';

const Routes = () => {
  const [userLogin, setUserLogin] = useState('');

  return (
    <NavigationContainer>
      {userLogin ? <AuthStack /> : <Tabs />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
