import React, { useContext, useState, useCallback } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, Platform } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";
import styles from "../shared/MainStyle";

const Profile = () => {
  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState();

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("userString")
        .then((userDetails) => {
          if (userDetails) {
            const user = JSON.parse(userDetails);
            //console.log("Retrieved object:", user);
            setUserProfile(user);
          } else {
            console.log("Object not found in AsyncStorage");
          }
        })
        .catch((error) => {
          console.error("Error retrieving object:", error);
        });
      return () => {
        setUserProfile();
      };
    }, [context.stateUser.isAuthenticated])
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", height: "90%" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between",marginTop:Platform.OS ==='ios' ? 0 : 35}}>
      <View style={[styles.header, styles.shadowProp]}>
          <View
            style={{
              flexDirection: "row",
              //alignSelf: "center",
              //marginLeft: 120,
            }}
          >
            <Text style={styles.headt}>{userProfile?.name}</Text>
          </View>
        </View>

        <View style={[styles.header, styles.shadowProp]}>
          <TouchableOpacity style={{ right: 5 }} onPress={() => logoutUser(context.dispatch)}>
            <Text style={styles.headt}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailbg}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: userProfile?.image }}
            resizeMode="cover"
            style={styles.imagdat}
          />
          <View style={{ marginTop: 40 }}>
            <View style={styles.cardet}>
              <Text style={styles.title}>{userProfile?.name}</Text>
            </View>
            <View style={styles.cardet}>
              <Text style={styles.title}>{userProfile?.phone}</Text>
            </View>
            <View style={styles.cardet}>
              <Text style={styles.title}>{userProfile?.role}</Text>
            </View>
            <View style={styles.cardet}>
              <Text style={styles.title}>{userProfile?.address}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={{backgroundColor:'#FFFFFF',height:"100%",borderTopLeftRadius:20, borderTopRightRadius:20,}}>
            <View style={{margin:15}}>
                <Text style={{fontWeight:'bold',fontSize:13}}>Products</Text>
            </View>
              <View style={[styles.catcont,styles.shadowProp]}>
                    <View style={{flexDirection:'row',justifyContent:"space-around"}}>
                          <View style={[styles.imgpad,styles.shadowProp]}>
                              <Image source={{ uri:item.image }} resizeMode="center" style={styles.catimg}/>
                          </View>
                          <View style={{margin:25}}>
                            <Text style={styles.txtbrd}>{item.name.length > 15 ? item.name.substring(0, 7 - 3) + '...' : item.name}</Text>
                            <Text style={styles.txtbrd}>₦{item.price}</Text>
                            <Text style={styles.txtbrd}>{item.rating}</Text>
                          </View>
                          <View style={{position:'absolute',top:-55,left:230}}>
                            <Text style={styles.txtbrd}>{item.status}</Text>
                          </View>
                    </View>
              </View>
          </View> */}
    </SafeAreaView>
  );
};

export default Profile;




// import React, { useContext, useState, useCallback } from "react";
// import { View, Text,SafeAreaView,TouchableOpacity,Image } from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import AuthGlobal from "../../Context/store/AuthGlobal";
// import { logoutUser } from "../../Context/actions/Auth.actions";
// import styles from "../shared/MainStyle";


// const Profile = ()=>{
//   const context = useContext(AuthGlobal);
//   const [userProfile, setUserProfile] = useState();
//   // const [image, setImage] = useState();
//   // const [name, setName] = useState();
//   // const [phone, setPhone] = useState();
//   // const [address, setAddress] = useState();

//   useFocusEffect(
//     useCallback(() => {
//       AsyncStorage.getItem("userString")
//       .then((userDetails) => {
//         if (userDetails) {
//           const user = JSON.parse(userDetails);
//           console.log("Retrieved object:", user);
//           setUserProfile(user);
//         } else {
//           console.log("Object not found in AsyncStorage");
//         }
//       })
//       .catch((error) => {
//         console.error("Error retrieving object:", error);
//       });
//       return () => {
//         setUserProfile();
//       };
//     }, [context.stateUser.isAuthenticated])
//   );

//   return (
//     <SafeAreaView style={{backgroundColor:'#FFFFFF',flex:1}}>
//                <View>
//                   <TouchableOpacity style={{right:5}} onPress={() =>  logoutUser(context.dispatch)}>
//                          <Text>LogOut</Text>
//                    </TouchableOpacity>
//                </View>
//       <View style={styles.detailbg}>
//         <View style={{flexDirection:'row'}}>
//              <Image source={{ uri:userProfile.image }} resizeMode="cover" style={styles.imagdat}/>
//              <View style={{marginTop:40}}>
//                 <View style={styles.cardet}>
//                   <Text style={styles.title}>{userProfile.name}</Text>
//                 </View>
//                 <View style={styles.cardet}>
//                   <Text style={styles.title}>{userProfile.phoneNumber}</Text>
//                 </View>
//                 <View style={styles.cardet}>
//                   <Text style={styles.title}>{userProfile.address}</Text>
//                 </View>
//              </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   )
// }
// export default Profile;