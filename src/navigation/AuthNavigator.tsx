import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro, Register, Login} from '../screens';
import {enableScreens} from 'react-native-screens';
enableScreens();

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        options={{
          title: 'Intro',
          headerShown: false,
          headerHideShadow: false,
          gestureEnabled: false,
        }}
        component={Intro}
      />
      <Stack.Screen
        name="Register"
        options={{
          title: 'Register',
          headerHideShadow: false,
          gestureEnabled: false,
        }}
        component={Register}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: 'Login',
          headerHideShadow: false,
          gestureEnabled: false,
        }}
        component={Login}
      />
    </Stack.Navigator>
  );
}
