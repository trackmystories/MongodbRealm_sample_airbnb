import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import {useAuth} from '../providers/AuthProvider';
import {enableScreens} from 'react-native-screens';
enableScreens();

const AuthStack = createNativeStackNavigator();
const BottomStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          gestureEnabled: false,
          headerShown: false,
          headerHideShadow: true,
        }}
        name="AuthNavigator"
        component={AuthNavigator}
      />
    </AuthStack.Navigator>
  );
};

const BottomStackNavigator = () => {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen
        options={{
          gestureEnabled: false,
          headerShown: false,
          headerHideShadow: true,
        }}
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </BottomStack.Navigator>
  );
};

export default function StackNavigator() {
  const {user} = useAuth();

  return (
    <>{user == null ? <AuthStackNavigator /> : <BottomStackNavigator />}</>
  );
}
