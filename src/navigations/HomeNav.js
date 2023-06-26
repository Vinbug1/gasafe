import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import HistoryDetails from '../screens/cards/HistoryDetails';
import HistoryCard from '../screens/cards/HistoryCard';
import TransactionHistory from '../screens/cards/TransactionHistory';
import AccountCard from '../screens/header/AccountCard';
// import ListItem from '../screens/vendors/ListItem';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  const [userInfor, setUserInfor] = useState(null);
 // const [showHomeScreen, setShowHomeScreen] = useState(true); // Initialize to true for the buyer role
  // const [showListItemScreen, setShowListItemScreen] = useState(true); // Initialize to false for the buyer role

  useEffect(() => {
    AsyncStorage.getItem("userString") .then((userDetails) => {
        if (userDetails) {
          const user = JSON.parse(userDetails);
          setUserInfor(user);
          //setShowHomeScreen(user.role === 'buyer');
          //setShowListItemScreen(user.role === 'vendor');
        } else {
          console.log("User not found in AsyncStorage");
        }
      })
      .catch((error) => {
        console.error("Error retrieving user from AsyncStorage:", error);
      });
  }, []);

  const renderStackScreen = (name, component, options) => (
    <Stack.Screen name={name} component={component} options={options} />
  );

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{ headerStyle: { backgroundColor: "#fff" } }}
    >
      {
        renderStackScreen("HomeScreen", HomeScreen, {
          headerShown: false,
        })
      }

      {/* {showListItemScreen ? (
        renderStackScreen("ListItemScreen", ListItem, {
          headerShown: false,
        })
      ) : null} */}

      {renderStackScreen("DailyTipScreen", DailyTip, {
        headerShown: false,
      })}
      {renderStackScreen("FilGasScreen", FilGas, {
        headerShown: false,
      })}
      {renderStackScreen("GctScreen", Gct, {
        headerShown: false,
      })}
      {renderStackScreen("MarketScreen", Market, {
        headerShown: false,
      })}
      {renderStackScreen("TopVendorScreen", TopVendor, {
        headerShown: false,
      })}
      {renderStackScreen("TransactionScreen", Transactions, {
        headerShown: false,
      })}
      {renderStackScreen("CheckScreen", CheckScreen, {
        headerShown: false,
      })}
      {renderStackScreen("ProductCard", ProductCard, {
        headerShown: false,
      })}
      {renderStackScreen("VendorCard", VendorCard, {
        headerShown: false,
      })}
      {renderStackScreen("ProductDetails", ProductDetails, {
        headerShown: false,
      })}
      {renderStackScreen("VendorDetails", VendorDetails, {
        headerShown: false,
      })}
      {renderStackScreen("Product", Product, {
        headerShown: false,
      })}
      {renderStackScreen("SearchScreen", Searched, {
        headerShown: false,
      })}
      {renderStackScreen("TransactionHistoryScreen", TransactionHistory, {
        headerShown: false,
      })}
      {renderStackScreen("HistoryDetails", HistoryDetails, {
        headerShown: false,
      })}
      {renderStackScreen("HistoryCard", HistoryCard, {
        headerShown: false,
      })}
      {renderStackScreen("MapScreen", MapScreen, {
        headerShown: false,
      })}
      {renderStackScreen("AcccountCardScreen", AccountCard, {
        headerShown: false,
      })}
    </Stack.Navigator>
  );
};

export default HomeNav;


// import React,{useState,useEffect} from 'react';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from '../screens/HomeScreen';
// import DailyTip from '../screens/gasscreen/DailyTip';
// import FilGas from '../screens/gasscreen/FilGas';
// import Gct from '../screens/gasscreen/Gct';
// import Market from '../screens/gasscreen/Market';
// import TopVendor from '../screens/gasscreen/TopVendor';
// import Transactions from '../screens/gasscreen/Transactions';
// import CheckScreen from '../screens/cart/CheckScreen';
// import MapScreen from '../screens/gasscreen/MapScreen';
// import ProductCard from '../screens/cards/ProductCard';
// import VendorCard from '../screens/cards/VendorCard';
// import ProductDetails from '../screens/cards/ProductDetails';
// import VendorDetails from '../screens/cards/VendorDetails';
// import Product from '../screens/cards/Product';
// import Searched from '../screens/cards/Searched';
// import HistoryDetails from '../screens/cards/HistoryDetails';
// import HistoryCard from '../screens/cards/HistoryCard';
// import TransactionHistory from '../screens/cards/TransactionHistory';
// import AccountCard from '../screens/header/AccountCard';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import ListItem from '../screens/vendors/ListItem';

// const Stack = createNativeStackNavigator();
// const HomeNav = () => {
//      const [userInfor, setUserInfor] = useState(null);
//      const [showCartTab, setShowCartTab] = useState(false);
//      const [showVendorTab, setShowVendorTab] = useState(false);
   
//      useEffect(() => {
//           AsyncStorage.getItem("userString")
//             .then((userDetails) => {
//               if (userDetails) {
//                 const user = JSON.parse(userDetails);
//                 setUserInfor(user);
//                 setShowCartTab(user.role === 'buyer');
//                 setShowVendorTab(user.role === 'vendor');
//               } else {
//                 console.log("User not found in AsyncStorage");
//               }
//             })
//             .catch((error) => {
//               console.error("Error retrieving user from AsyncStorage:", error);
//             });
//         }, []);

//         const renderStackScreen = (name, component, options) => (
//           <Stack.Screen
//             name={name}
//             component={component}
//             options={options}
//           />
//         );
//   return (
//     <Stack.Navigator 
//     headerModal="non"
//     screenOptions={{ headerStyle: { backgroundColor: "#fff" } }}
//     >
     
//          {renderStackScreen("HomeScreen", HomeScreen,{

//             name="HomeScreen",
//             component={HomeScreen},
//             options={{ headerShown: false }}
//          })}
       
//        {renderStackScreen("",,{

//             name="ListItemScreen",
//             component={ListItem},
//             options={{ headerShown: false }}
//        })}
       
//          {renderStackScreen("",,{

//             name="DailyTipScreen"
//             component={DailyTip}
//             options={{ headerShown: false }}
//          })}
       
//          {renderStackScreen("",,{

//             name="FilGasScreen"
//             component={FilGas}
//             options={{ headerShown: false }}
//          })}
       
//          {renderStackScreen("",,{

//             name="GctScreen"
//             component={Gct}
//             options={{ headerShown: false }}
//          })}
       
//          {renderStackScreen("",,{

//             name="MarketScreen"
//             component={Market}
//             options={{ headerShown: false }}
//          })}
       
//          {renderStackScreen("",,{

//             name="TopVendorScreen"
//             component={TopVendor}
//             options={{ headerShown: false }}
//          })}
       
//          {renderStackScreen("",,{

//             name="TransactionScreen"
//             component={Transactions}
//             options={{ headerShown: false }}
//          })}
       
//         {renderStackScreen("",,{

//             name="CheckScreen"
//             component={CheckScreen}
//             options={{ headerShown: false }}
//         })}
       
        
//         {renderStackScreen("",,{

//             name="ProductCard"
//             component={ProductCard}
//             options={{ headerShown: false }}
//         })}
       
//        {renderStackScreen("",,{

//             name="VendorCard"
//             component={VendorCard}
//             options={{ headerShown: false }}
//        })}
       
//        {renderStackScreen("",,{

//             name="ProductDetails"
//             component={ProductDetails}
//             options={{ headerShown: false }}
//        })}
       
//        {renderStackScreen("",,{

//             name="VendorDetails"
//             component={VendorDetails}
//             options={{ headerShown: false }}
//        })}
       
//        {renderStackScreen("",,{

//             name="Product"
//             component={Product}
//             options={{ headerShown: false }}
//        })}
       
//        {renderStackScreen("",,{

//             name="SearchScreen"
//             component={Searched}
//             options={{ headerShown: false }}
//        })}
       
        
//        {renderStackScreen("",,{

//             name="TransactionHistoryScreen"
//             component={TransactionHistory}
//             options={{ headerShown: false }}
//        })}
       
//        {renderStackScreen("",,{

//             name="HistoryDetails"
//             component={HistoryDetails}
//             options={{ headerShown: false }}
//        })}
       
//        {renderStackScreen("",,{

//             name="HistoryCard"
//             component={HistoryCard}
//             options={{ headerShown: false }}
//        })}
       
//         {renderStackScreen("",,{

//             name="MapScreen"
//             component={MapScreen}
//             options={{ headerShown: false }}
//         })}
       
//        {renderStackScreen("",,{

//             name="AcccountCardScreen"
//             component={AccountCard}
//             options={{ headerShown: false }}
//        })}
       
//     </Stack.Navigator>
//   )
// }

// export default HomeNav;