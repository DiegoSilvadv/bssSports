import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Statistics from '../components/Statistics';

import { Image } from 'react-native';
import Basquete from '../pages/Basquete';
import Team from '../pages/Team';
import React from 'react';

const appStack = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        name='Statistic'
        component={StatisticsTeam}
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
        name='Team'
        component={Tabs}
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

function StatisticsTeam() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Statistic"
        component={Statistics}
        options={{ headerShown: false  }}
      />
      <Stack.Screen
        name="Team"
        component={Team}
        options={{ headerShown: false  }}
      />
    </Stack.Navigator>
  )
}



 