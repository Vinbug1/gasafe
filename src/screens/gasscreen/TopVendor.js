import React, { useState, useCallback } from "react";
import Toast from "react-native-root-toast";
import axios from "axios";
import baseUrl from "../../../assets/common/baseUrl";
import styles from "../../shared/MainStyle";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Vendor from "../cards/Vendor";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TopVendor = () => {
  const navigation = useNavigation();
  const [vendors, setVendors] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productsFiltered, setProductsFiltered] = useState([]);

  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("jwt").then((tkn) => {
        axios({
          method: "GET",
          url: `${baseUrl}users/vendor`,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tkn,
          },
        })
          .then((res) => {
            setLoading(false);
            setVendors(res.data);
          })
          .catch((error) => {
            Toast.show(error.message, Toast.LENGTH_SHORT);
          });
        return () => {
          setProducts([]);
          setVendors([]);
        };
      });
    }, [])
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              left: 16,
              top: 25,
              //marginTop: Platform.OS === "ios" ? 5 : 15,
            }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="leftcircleo" size={28} color="#2ED1C0" />
          </TouchableOpacity>
          <View style={{padding:18}}>
            {/* <FontAwesome5 name="user-friends" size={22} color="#FFFFFF"   style={{alignSelf:"center"}}/> */}
            <Text style={styles.headtx}>Top Vendors</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#e8e6e6", height: "100%" }}>
          <ScrollView>
            <View style={styles.listContainer}>
              {vendors.map((item) => {
                return <Vendor key={item.name} item={item} />;
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default TopVendor;
