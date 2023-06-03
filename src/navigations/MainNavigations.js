import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from './Main';
import Onboarding from '../screens/Onboarding';
import SignIn from '../screens/users/SignIn';
import SignUp from '../screens/users/SignUp';
import VendorSignUp from '../screens/users/VendorSignUp';
import NewProduct from '../screens/vendors/NewProduct';
import ForgeetPassword from '../screens/users/ForgetPassword';
import Verification from '../screens/users/Verification';
import HomeScreen from '../screens/HomeScreen';
import DailyTip from '../screens/gasscreen/DailyTip';
import FilGas from '../screens/gasscreen/FilGas';
import Gct from '../screens/gasscreen/Gct';
import Market from '../screens/gasscreen/Market';
import TopVendor from '../screens/gasscreen/TopVendor';
import Transactions from '../screens/gasscreen/Transactions';
import CheckScreen from '../screens/cart/CheckScreen';
import MapScreen from '../screens/gasscreen/MapScreen';
import ProductCard from '../screens/cards/ProductCard';
import VendorCard from '../screens/cards/VendorCard';
import ProductDetails from '../screens/cards/ProductDetails';
import VendorDetails from '../screens/cards/VendorDetails';
import Product from '../screens/cards/Product';
import Searched from '../screens/cards/Searched';
// import TransHistory from '../screens/cards/TransHistory';
import HistoryDetails from '../screens/cards/HistoryDetails';
import HistoryCard from '../screens/cards/HistoryCard';
import TransactionHistory from '../screens/cards/TransactionHistory';
import VendorBank from '../screens/users/VendorBank';
//import VendorSignUp from '../screens/users/VendorSignUp';

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
            name="VendorBankScreen"
            component={VendorBank}
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
        <Stack.Screen
            name="CheckScreen"
            component={CheckScreen}
            options={{ headerShown: false }}
       />
        <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false }}
       />
        <Stack.Screen
            name="ProductCard"
            component={ProductCard}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="VendorCard"
            component={VendorCard}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="VendorDetails"
            component={VendorDetails}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="Product"
            component={Product}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="SearchScreen"
            component={Searched}
            options={{ headerShown: false }}
       />
         {/* <Stack.Screen
            name="TransHistScreen"
            component={TransHistory}
            options={{ headerShown: false }}
       /> */}
       <Stack.Screen
            name="TransactionHistoryScreen"
            component={TransactionHistory}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="HistoryDetails"
            component={HistoryDetails}
            options={{ headerShown: false }}
       />
       <Stack.Screen
            name="HistoryCard"
            component={HistoryCard}
            options={{ headerShown: false }}
       />
       
       
      {/* <Stack.Screen />  
      <Stack.Screen />  
      <Stack.Screen />   */}
    </Stack.Navigator>
  )
}

export default MainNavigations