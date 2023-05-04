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
import DailyTip from '../screens/gasscreen/DailyTip';
import FilGas from '../screens/gasscreen/FilGas';
import Gct from '../screens/gasscreen/Gct';
import Market from '../screens/gasscreen/Market';
import TopVendor from '../screens/gasscreen/TopVendor';
import Transactions from '../screens/gasscreen/Transactions';

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
         <Stack.Screen
            name="DailyTipScreen"
            component={DailyTip}
            options={{ headerShown: false }}
       />
         <Stack.Screen
            name="FilGasScreen"
            component={FilGas}
            options={{ headerShown: false }}
       />
         <Stack.Screen
            name="GctScreen"
            component={Gct}
            options={{ headerShown: false }}
       />
         <Stack.Screen
            name="MarketScreen"
            component={Market}
            options={{ headerShown: false }}
       />
         <Stack.Screen
            name="TopVendorScreen"
            component={TopVendor}
            options={{ headerShown: false }}
       />
         <Stack.Screen
            name="TransactionScreen"
            component={Transactions}
            options={{ headerShown: false }}
       />
      {/* <Stack.Screen />  
      <Stack.Screen />  
      <Stack.Screen />   */}
    </Stack.Navigator>
  )
}

export default MainNavigations