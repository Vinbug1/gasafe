import React, { useState,useCallback } from "react";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import baseUrl from "../../common/baseUrl";
import styles from "../../shared/MainStyle"; 
import { Text,View,SafeAreaView,TouchableOpacity} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {AntDesign,MaterialIcons } from '@expo/vector-icons';
import TransHistory from "../cards/TransHistory";


const Transactions = () => {
  const data = [{
    "_id": {
      "$oid": "5f15d8852a025143f9593a7c"
    },
    "image": "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "brand": "PS3",
    "price": 250,
    "rating": 1,
    "numReviews": 0,
    "isFeatured": true,
    "name": "FIFA 20",
    "description": "The most hard FIFA ever",
    "category": {
      "$oid": "5f15d5cdcb4a6642bddc0fe9"
    },
    "countInStock": 25,
    "__v": 0
  },{
    "_id": {
      "$oid": "5f15d92ee520d44421ed8e9b"
    },
    "image": "should be some path",
    "brand": "IKEA",
    "price": 350.9,
    "rating": 5,
    "numReviews": 0,
    "isFeatured": true,
    "name": "Garden Chair",
    "description": "beautiful chair for garden",
    "category": {
      "$oid": "5f15d5b7cb4a6642bddc0fe8"
    },
    "countInStock": 10,
    "__v": 0
  },{
    "_id": {
      "$oid": "5f15d964e520d44421ed8e9c"
    },
    "image": "should be some path",
    "brand": "OBI",
    "price": 1350.9,
    "rating": 5,
    "numReviews": 0,
    "isFeatured": true,
    "name": "Swimming Pool",
    "description": "beautiful Swimming Pool for garden",
    "category": {
      "$oid": "5f15d5b7cb4a6642bddc0fe8"
    },
    "countInStock": 10,
    "__v": 0
  },{
    "_id": {
      "$oid": "5f15d9b3e520d44421ed8e9d"
    },
    "image": "should be some path",
    "brand": "OBI",
    "price": 490.9,
    "rating": 5,
    "numReviews": 0,
    "isFeatured": true,
    "name": "Grass Cut Machine",
    "description": "Grass Cut Machine for garden",
    "category": {
      "$oid": "5f15d5b7cb4a6642bddc0fe8"
    },
    "countInStock": 5,
    "__v": 0
  },{
    "_id": {
      "$oid": "5f15da13e520d44421ed8e9e"
    },
    "image": "should be some path",
    "brand": "Mobilix",
    "price": 1000,
    "rating": 5,
    "numReviews": null,
    "isFeatured": true,
    "name": "Sofa",
    "description": "Big Sofa for living room",
    "category": {
      "$oid": "5f15d5b2cb4a6642bddc0fe7"
    },
    "countInStock": 2,
    "__v": 0
  }]
  const navigation = useNavigation();
  const [histories , setHistories] = useState(data);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productsFiltered, setProductsFiltered] = useState([]);
  
 
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };


  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  };

  useFocusEffect(
    useCallback(() => {
      SecureStore.getItemAsync("secureToken").then((result) => {
          axios({
            method: "GET",
            url: `${baseUrl}histories`,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + result,
            },
          }).then((res) => {
              setLoading(false);
              setHistories(res.data);
            }).catch((error) => {
              Toast.show(error.message, Toast.LENGTH_SHORT);
            });
        return () => {
          setHistories([]);
        };
      });
    }, [])
  );

  return (
    <SafeAreaView style={{backgroundColor:'#2ED1C0'}} >
      <View style={styles.header}>
          <TouchableOpacity style={{left:8,top:5}} onPress={() => navigation.goBack()}>
                  <AntDesign name="leftcircleo" size={28} color="#FFFFFF" />
          </TouchableOpacity>
           <View style={{marginRight:85,flexDirection:'row'}}>
                 <MaterialIcons name="history-edu" size={22} color="#FFFFFF"   style={{alignSelf:"center"}}/>
             <Text style={styles.headtx}>Transaction History</Text>
           </View>
      </View>
        <View style={{backgroundColor:"#e8e6e6",height:"100%",marginTop:15}}>
              <View contentContainerStyle={{ padding: 9 }} vertical  showsVerticalScrollIndicator={false} >
                <TransHistory histories={histories}/>
              </View> 
         </View>
  </SafeAreaView> 
  )
}

export default Transactions