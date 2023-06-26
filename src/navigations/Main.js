import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from "../screens/Profile";
import HomeNav from './HomeNav';
import CartNav from './CartNav';
import VendorNavigation from './VandorNavigation';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialBottomTabNavigator();

const Main = () => {
  const [userInfor, setUserInfor] = useState(null);
  const [showCartTab, setShowCartTab] = useState(false);
  const [showVendorTab, setShowVendorTab] = useState(false);
  const [showHomeTab, setShowHomeTab] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("userString")
      .then((userDetails) => {
        if (userDetails) {
          const user = JSON.parse(userDetails);
          setUserInfor(user);
          setShowCartTab(user.role === 'buyer');
          setShowHomeTab(user.role === 'buyer');
          setShowVendorTab(user.role === 'vendor');
        } else {
          console.log("User not found in AsyncStorage");
        }
      })
      .catch((error) => {
        console.error("Error retrieving user from AsyncStorage:", error);
      });
  }, []);

  const renderTabScreen = (name, component, options) => (
    <Tab.Screen
      name={name}
      component={component}
      options={options}
    />
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeNavigation"
      activeColor="#FFFFFF"
      inactiveColor="black"
      barStyle={{ backgroundColor: '#2ED1C0' }}
    >
       {/* {showVendorTab && renderTabScreen("Vendor", VendorNavigation, {
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={30} />
        ),
      })} */}
      {showHomeTab && renderTabScreen("HomeNavigation", HomeNav, {
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      })}
      {showCartTab && renderTabScreen("Cart", CartNav, {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cart" color={color} size={26} />
        ),
      })}
      {showVendorTab && renderTabScreen("Vendor", VendorNavigation, {
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={30} />
        ),
      })}
      {renderTabScreen("Profile", Profile, {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      })}
    </Tab.Navigator>
  );
};

export default Main;



// import ReaFontistoct, { useEffect, useState } from "react";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Profile from "../screens/Profile";
// import HomeNav from './HomeNav';
// import CartNav from './CartNav';
// import VendorNavigation from './VandorNavigation';
// // import AdminNavigation from './AdminNavigation';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Tab = createMaterialBottomTabNavigator();

// const Main = () => {
//   const [userInfor, setUserInfor] = useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem("userString")
//       .then((userDetails) => {
//         if (userDetails) {
//           const user = JSON.parse(userDetails);
//           setUserInfor(user);
//         } else {
//           console.log("User not found in AsyncStorage");
//         }
//       })
//       .catch((error) => {
//         console.error("Error retrieving user from AsyncStorage:", error);
//       });
//   }, []);

//   const renderTabScreen = (name, component, options) => (
//     <Tab.Screen
//       name={name}
//       component={component}
//       options={options}
//     />
//   );

//   return (
//     <Tab.Navigator
//       initialRouteName="HomeNavigation"
//       activeColor="#FFFFFF"
//       inactiveColor="black"
//       barStyle={{ backgroundColor: '#2ED1C0' }}
//     >
//       {renderTabScreen("HomeNavigation", HomeNav, {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="home" color={color} size={26} />
//         ),
//       })}
//       {renderTabScreen("Cart", CartNav, {
//         tabBarLabel: 'Cart',
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="cart" color={color} size={26} />
//         ),
//       })}
//       {renderTabScreen("Profile", Profile, {
//         tabBarLabel: 'Profile',
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="account" color={color} size={26} />
//         ),
//       })}
//       {userInfor && userInfor.role === 'vendor' && renderTabScreen("Vendor", VendorNavigation, {
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="cog" color={color} size={30} />
//         ),
//       })}
//       {/* {userInfor && userInfor.isAdmin && renderTabScreen("Admin", AdminNavigation, {
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="cog" color={color} size={30} />
//         ),
//       })} */}
//     </Tab.Navigator>
//   );
// };

// export default Main;




// import React, { useContext,useState } from "react";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Profile from "../screens/Profile";
// import HomeNav from './HomeNav';
// import CartNav from './CartNav';
// import VendorNavigation from './VandorNavigation';
// import AdminNavigation from './AdminNavigation';
// import AuthGlobal from "../../Context/store/AuthGlobal";
// import AsyncStorage from "@react-native-async-storage/async-storage";


// const Tab = createMaterialBottomTabNavigator();

// const Main = () => {
//   const {userInfor, setUserInfor} = useState();
//   //const context = useContext(AuthGlobal);
//   AsyncStorage.getItem("userString")
//   .then((userDetails) => {
//     if (userDetails) {
//       const user = JSON.parse(userDetails);
//       //console.log(user.role);
//       setUserInfor(user);
//     } else { console.log("Object not found in AsyncStorage") }})
//   .catch((error) => { console.error("Error retrieving object:", error) })
//  // const { user } = context.stateUser;

//   const renderTabScreen = (name, component, options) => (
//     <Tab.Screen
//       name={name}
//       component={component}
//       options={options}
//     />
//   );

//   return (
//     <Tab.Navigator
//       initialRouteName="HomeNavigation"
//       activeColor="#FFFFFF"
//       inactiveColor="black"
//       barStyle={{ backgroundColor: '#2ED1C0' }}
//     >
//       {renderTabScreen("HomeNavigation", HomeNav, {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="home" color={color} size={26} />
//         ),
//       })}
//       {renderTabScreen("Cart", CartNav, {
//         tabBarLabel: 'Cart',
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="cart" color={color} size={26} />
//         ),
//       })}
//       {renderTabScreen("Profile", Profile, {
//         tabBarLabel: 'Profile',
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="account" color={color} size={26} />
//         ),
//       })}
//      {userInfor.role === 'vendor' && renderTabScreen("Vendor", VendorNavigation, {
//         tabBarIcon: ({ color }) => (
//          <MaterialCommunityIcons name="cog" color={color} size={30} />
//        ),
//       })}
//       {/* {user.isAdmin && renderTabScreen("Admin", AdminNavigation, {
//         tabBarIcon: ({ color }) => (
//           <MaterialCommunityIcons name="cog" color={color} size={30} />
//         ),
//       })} */}
//     </Tab.Navigator>
//   );
// };

// export default Main





// import React, {  useContext } from "react";
// import Profile from "../screens/Profile";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeNav from './HomeNav';
// import CartNav from './CartNav';
// import VendorNavigation from './VandorNavigation';
// import AdminNavigation from './AdminNavigation';
// import AuthGlobal from "../../Context/store/AuthGlobal";

// const Tab = createMaterialBottomTabNavigator();

// function Main() {
//   const context = useContext(AuthGlobal);

//   return (
//     <Tab.Navigator
//       initialRouteName="HomeNavigation"
//       activeColor="#FFFFFF"
//       inactiveColor="black"
//       barStyle={{ backgroundColor: '#2ED1C0' }}
//     >
//       <Tab.Screen
//         name="HomeNavigation"
//         component={HomeNav}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={CartNav}
//         options={{
//           tabBarLabel: 'Cart',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="cart" color={color} size={26} />
//           ),
//         }}
//       />
//         {context.stateUser.user.role == 'vendor' ? (
//          <Tab.Screen
//            name="Vendor"
//            component={VendorNavigation}
//            options={{
//              tabBarIcon: ({ color }) => (
//                <MaterialCommunityIcons name="cog" color={color} size={26} />
//              ),
//            }}
//          />
//        ) : null}

//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
     
      
//       {/* // context.stateUser.user.isAdmin == true (
//       //   <Tab.Screen
//       //     name="Admin"
//       //     component={AdminNavigation }
//       //     options={{
//       //       tabBarIcon: ({ color }) => (
//       //         <Icon name="cog" color={color} size={30} />
//       //       ),
//       //     }}
//       //   />
//       // )}
//       */}
//     </Tab.Navigator>
//   );
// }
// export default Main;








