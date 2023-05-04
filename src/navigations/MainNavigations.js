import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from './Main';
import Onboarding from '../screens/Onboarding';
import SignIn from '../screens/users/SignIn';
import SignUp from '../screens/users/SignUp';
import VendorSignUp from '../screens/users/VendorSignUp';
import NewProduct from '../screens/NewProduct';
import ForgeetPassword from '../screens/users/ForgetPassword';
import Verification from '../screens/users/Verification';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const MainNavigations = () => {
  return (
    <Stack.Navigator 
    headerModal="non"
    screenOptions={{ headerStyle: { backgroundColor: "#fff" } }}
    >
      <Stack.Screen
        name="Onbording"
        component={Onboarding}
        options={{ headerShown: false }}
      
      />  
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }} 
      />  
      <Stack.Screen 
        name="MainScreen"
        component={Main}
        options={{ headerShown: false }}
      />  
      <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
       />  
       <Stack.Screen
            name="VendorSignUp"
            component={VendorSignUp}
            options={{ headerShown: false }}
       /> 
        <Stack.Screen
            name="NewProduct"
            component={NewProduct}
            options={{ headerShown: false }}
       /> 
         <Stack.Screen
            name="ForgetPassword"
            component={ForgeetPassword}
            options={{ headerShown: false }}
       /> 
         <Stack.Screen
            name="Verification"
            component={Verification}
            options={{ headerShown: false }}
       /> 
         <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
       />
      {/* <Stack.Screen />  
      <Stack.Screen />  
      <Stack.Screen />   */}
    </Stack.Navigator>
  )
}

export default MainNavigations