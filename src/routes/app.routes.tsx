import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Statistics from '../components/Statistics';

import { Image } from 'react-native';

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
          height: 72
        }
      }}
      
    >
      <appStack.Screen
        name='Home'
        component={Home}
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
        component={Volei}
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

