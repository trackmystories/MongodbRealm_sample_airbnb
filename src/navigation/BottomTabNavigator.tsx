import * as React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Account, Home} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListingProvider from '../providers/ListingProvider';

type BottomTabParamList = {
  default: undefined;
};

type BottomTabNavigationProps<
  T extends keyof BottomTabParamList = 'default'
> = BottomTabNavigationProp<BottomTabParamList, T>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  return (
    <ListingProvider>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          showLabel: true,
          style: {backgroundColor: 'black'},
        }}
        options={{gestureEnabled: false}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'reorder-four' : 'reorder-four';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen component={Home} name="Home" />
        <Tab.Screen component={Account} name="Account" />
      </Tab.Navigator>
    </ListingProvider>
  );
}
