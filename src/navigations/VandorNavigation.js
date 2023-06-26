import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from '../screens/cards/Product';
import NewProduct from '../screens/vendors/NewProduct';
import ListItem from '../screens/vendors/ListItem';
import OrderList from '../screens/vendors/OrderList';
import OrderDetails from '../screens/vendors/OrderDetails';
import OrderCard from '../screens/vendors/OrderCard';

const Stack = createNativeStackNavigator();
const VendorNavigation = () => {
  return (
    <Stack.Navigator 
    headerModal="non"
    screenOptions={{ headerStyle: { backgroundColor: "#FFFFFF" } }}
    >
     
         <Stack.Screen
            name="ListItemScreen"
            component={ListItem}
            options={{ headerShown: false }}
       />
         <Stack.Screen
            name="OrderListScreen"
            component={OrderList }
            options={{ headerShown: false }}
       />
         
       <Stack.Screen
            name="Product"
            component={Product}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="NewProduct"
            component={NewProduct}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="OrderDetail"
            component={OrderDetails}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="OrderCard"
            component={OrderCard}
            options={{ headerShown: false }}
       />
       
    </Stack.Navigator>
  )
}

export default VendorNavigation;