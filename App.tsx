import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyle } from './src/globalStyles';
import { Routes } from './src/routes';


export default function App() {
  return (
      <NavigationContainer>
        
        <Routes />
      </NavigationContainer>
  );
}

