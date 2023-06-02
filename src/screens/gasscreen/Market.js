import React, { useState,useCallback } from "react";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import baseUrl from "../../../assets/common/baseUrl";
import styles from "../../shared/MainStyle"; 
import { Text,View,SafeAreaView,TouchableOpacity,ScrollView} from "react-native";
import Product from "../cards/Product";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Vendor from "../cards/Vendor";
import Input from "../../shared/Input";
import {AntDesign, EvilIcons,Fontisto } from '@expo/vector-icons';

const Market = () => {
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
  const [products, setProducts] = useState(data);
  const [vendors, setVendors] = useState(data);
  const [focus, setFocus] = useState();
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState();
  
  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  }; 

  const visibility = () => {
    setShouldShow(false);
  };
 
  const invisible = () => {
    setShouldShow(true);
  };
 
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  };

  useFocusEffect(
    useCallback(() => {
      SecureStore.getItemAsync("secureToken").then((result) => {
        axios({
          method: "GET",
          url: `${baseUrl}products`,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + result,
          },
        }).then((res) => {
            setLoading(false);
            setProductsFiltered(res.data);
            //setProducts(res.data);
          }).catch((error) => {
            Toast.show(error.message, Toast.LENGTH_SHORT);
          });

          axios({
            method: "GET",
            url: `${baseUrl}vendors`,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + result,
            },
          }).then((res) => {
              setLoading(false);
              setVendors(res.data);
              setProductsFiltered(res.data);
            }).catch((error) => {
              Toast.show(error.message, Toast.LENGTH_SHORT);
            });
        return () => {
          setProducts([]);
          setVendors([]);
          setProductsFiltered([]);
        };
      });
    }, [])
  );

  return (
    <SafeAreaView style={{backgroundColor:'#FFFFFF'}} >
      <View style={[styles.header,styles.shadowProp]}>
          <TouchableOpacity style={{left:8,top:5}} onPress={() => navigation.goBack()}>
                  <AntDesign name="leftcircleo" size={28} color="#2ED1C0" />
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignSelf:'center',marginRight:120}}>
             <Text style={styles.headtxt}>Gasafe</Text>
             <Fontisto name="shopping-store" size={25} color="#2ED1C0"  style={{alignSelf:"center"}} />
          </View>
      </View>
      <View style={{ height: 3, width: "100%", backgroundColor: "#c8c8c8" }} />
         <View style={[styles.searchvw,styles.shadowProp]} > 
                  <Input  placeholder="productsFiltered" onChangeText={(text) => setProductsFiltered(text)} value={productsFiltered} secureTextEntry={true} /> 
                    <EvilIcons name="search" size={25} color="black" />  
          </View>

        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <>
              <TouchableOpacity  onPress={() => visibility()} style={[styles.btnsmd,styles.shadowProp]}  >
                    <Text style={styles.txtsmd}>Products</Text>
              </TouchableOpacity>
          </>
          <>
              <TouchableOpacity  onPress={() => invisible()} style={[styles.btnsmd,styles.shadowProp]} >
                    <Text style={styles.txtsmd}>Vendors</Text>
              </TouchableOpacity>
          </>
        </View>
        <View style={{backgroundColor:"#e8e6e6",height:"100%",marginTop:15}}>
            {shouldShow ? ( 
              <ScrollView >
                      <View style={styles.listContainer}>
                                {vendors.map((item) => {
                                  return ( <Vendor key={item.name} item={item} /> );
                            })}
                    </View>
              </ScrollView>
            ):(
              <View contentContainerStyle={{ padding: 9 }} vertical  showsVerticalScrollIndicator={false} >
                <Product products={products}/>
              </View> 
            )}
          
         </View>
  </SafeAreaView> 
  )
}

export default Market