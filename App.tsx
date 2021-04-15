import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
