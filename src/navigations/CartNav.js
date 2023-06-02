import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from '../screens/cart/Cart';
import CartItem from '../screens/cart/CartItem';

const Stack = createNativeStackNavigator();
const MainNavigations = () => {
  return (
    <Stack.Navigator 
    headerModal="non"
    screenOptions={{ headerStyle: { backgroundColor: "#fff" } }}
    >
         <Stack.Screen
            name="CartScreen"
            component={Cart}
            options={{ headerShown: false }}
       />
        
       <Stack.Screen
            name="CartItem"
            component={CartItem}
            options={{ headerShown: false }}
       />
      
    </Stack.Navigator>
  )
}

export default MainNavigations