import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from './Main';
import UserNavigation from './UserNavigation';

const Stack = createNativeStackNavigator();
const MainNavigations = () => {
  return (
    <Stack.Navigator 
    headerModal="non"
    screenOptions={{ headerStyle: { backgroundColor: "#fff" } }}
    >
      <Stack.Screen
        name="User"
        component={UserNavigation}
        options={{ headerShown: false }}
      
      />  
      <Stack.Screen 
        name="MainScreen"
        component={Main}
        options={{ headerShown: false }}
      />  
                  
       
      {/* <Stack.Screen />  
      <Stack.Screen />  
      <Stack.Screen />   */}
    </Stack.Navigator>
  )
}

export default MainNavigations