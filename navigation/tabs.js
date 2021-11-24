import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';

import MessagesScreen from '../Screens/MessagesScreen';
import Reels from '../Screens/Reels';
import Profile from '../Screens/Profile';

import {COLORS} from '../constants';
import ChatScreen from '../Screens/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  // const getTabBarVisibilty = route => {
  //   const routeName = route.state
  //     ? route.state.routes[route.state.index].name
  //     : '';

  //   if (routeName === 'Chat') {
  //     return false;
  //   }
  //   return true;
  // };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Messagess"
        component={MessagesScreen}
        options={({route}) => ({
          tabBarBadge: 9,
          tabBarHideOnKeyboard: true,
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <Icon
              name="chat"
              size={25}
              type="material"
              color={focused ? COLORS.primary : COLORS.darkgray}
            />
          ),
          headerTitleAlign: 'center',
        })}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <Icon
              name="play-circle-outline"
              size={25}
              type="ionicon"
              color={focused ? COLORS.red : COLORS.darkgray}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="person-outline"
              size={25}
              type="ionicon"
              color={focused ? COLORS.blue : COLORS.darkgray}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Messages"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({route}) => ({
          title: route.params.userName,
        })}
      />
    </Stack.Navigator>
  );
};

export default App;
