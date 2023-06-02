import React, { useContext, useState, useCallback } from "react";
import { View, Text,SafeAreaView,TouchableOpacity,Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";
import styles from "../shared/MainStyle";


const Profile =(props)=>{
  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  useFocusEffect(
    useCallback(() => {
      if (
        context.stateUser.isAuthenticated === false ||
        context.stateUser.isAuthenticated === null
      ) {
        props.navigation.navigate("Login");
      }

      AsyncStorage.getItem("jwt")
        .then((res) => {
          axios
            .get(`${baseURL}users/${context.stateUser.user.sub}`, {
              headers: { Authorization: `Bearer ${res}` },
            })
            .then((user) => setUserProfile(user.data));
        })
        .catch((error) => console.log(error));
      return () => {
        setUserProfile();
      };
    }, [context.stateUser.isAuthenticated])
  );
  return (
    <SafeAreaView style={{backgroundColor:'#FFFFFF',flex:1}}>
               <View>
                  <TouchableOpacity style={{right:5}} onPress={() =>  logoutUser(context.dispatch)}>
                         <Text>LogOut</Text>
                   </TouchableOpacity>
               </View>
      <View style={styles.detailbg}>
        <View style={{flexDirection:'row'}}>
             <Image source={{ uri:image }} resizeMode="cover" style={styles.imagdat}/>  
             <View style={{marginTop:40}}>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{phone}</Text>
                </View>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{address}</Text>
                </View>          
             </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Profile;