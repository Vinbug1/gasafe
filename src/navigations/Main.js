import * as React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from "../screens/HomeScreen";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
// function Feed() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Feed!</Text>
//       </View>
//     );
//   }
  
//   function Profile() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Profile!</Text>
//       </View>
//     );
//   }
  
//   function Notifications() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Notifications!</Text>
//       </View>
//     );
//   }

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
        component={HomeScreen }
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
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