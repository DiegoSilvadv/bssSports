import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Statistics from '../components/Statistics';

import { Image } from 'react-native';
import Basquete from '../pages/Basquete';
import React from 'react';

const appStack = createBottomTabNavigator();

export function AppRoutes() {

  return (
    <appStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 7,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          height: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}
      
    >
      <appStack.Screen
        name='Home'
        component={Basquete}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                require('../assets/basketball.png')
              }
            />
          ),
        }}
      />

      <appStack.Screen
        name='teste'
        component={Statistics}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                require('../assets/iconhand.png')
              }
            />
          ),
        }}
      />

      {/* <appStack.Screen
        name='teste7'
        component={}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                require('../assets/voleibol.png')
              }
            />
          ),

        }}
      /> */}
    </appStack.Navigator>
  )
}

 