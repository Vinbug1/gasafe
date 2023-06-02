import * as React from 'react';
import Profile from "../screens/Profile";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNav from './HomeNav';
import CartNav from './CartNav';

const Tab = createMaterialBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#2ED1C0"
      inactiveColor="black"
      barStyle={{ backgroundColor: '#ffff' }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNav}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Main