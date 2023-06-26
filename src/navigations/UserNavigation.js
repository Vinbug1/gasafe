import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import SignIn from "../screens/users/SignIn";
import SignUp from "../screens/users/SignUp";
import BuyerSignUp from "../screens/users/BuyerSignUp";
import VendorSignUp from "../screens/users/VendorSignUp";
import Verification from "../screens/users/Verification";
import ForgetPassword from "../screens/users/ForgetPassword";
import VendorBank from "../screens/users/VendorBank";

const Stack = createNativeStackNavigator();
const UserNavigation = () => {
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
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BuyerScreen"
        component={BuyerSignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BankScreen"
        component={VendorBank}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VendorSignUp"
        component={VendorSignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;
