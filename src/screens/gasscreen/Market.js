import React, { useState, useCallback } from "react";
import Toast from "react-native-root-toast";
import axios from "axios";
import baseURL from "../../../assets/common/baseUrl";
import styles from "../../shared/MainStyle";
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import Product from "../cards/Product";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Vendor from "../cards/Vendor";
import Input from "../../shared/Input";
import { AntDesign, EvilIcons, Fontisto } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListItem = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [focus, setFocus] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState("");

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

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("jwt").then((tkn) => {
        axios({
          method: "GET",
          url: `${baseURL}products`,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tkn,
          },
        })
          .then((res) => {
            console.log("buyerUser",res.data.image);
            setLoading(false);
            setProductsFiltered(res.data);
            setProducts(res.data);
          })
          .catch((error) => {
            Toast.show(error.message, Toast.LENGTH_SHORT);
          });

        axios({
          method: "GET",
          url: `${baseURL}users/vendor`,
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
          setProductsFiltered([]);
        };
      });
    }, [])
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <View  style={{marginTop:45}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ left: 8,padding:8 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircleo" size={28} color="#2ED1C0" />
        </TouchableOpacity>
          <Text style={styles.headtxt}>Gasafe</Text>
          <Fontisto
            name="shopping-store"
            size={25}
            color="#2ED1C0"
            style={{ padding:8}}
          />
        {/* </View> */}
      </View>

      <View style={{ height: 3, width: "100%", backgroundColor: "#62f5e5" }} />
      <View style={[styles.searchvw, styles.shadowProp]}>
        <Input
          placeholder="Search products"
          onChangeText={searchProduct}
          value={search}
        />
        <EvilIcons name="search" size={25} color="black" />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={visibility}
          style={[
            styles.btnsmd,
            styles.shadowProp,
            !shouldShow ? { backgroundColor: "#2ED1C0" } : null,
          ]}
        >
          <Text style={[styles.txtsmd, !shouldShow ? { color: "#FFFFFF" } : null]}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={invisible}
          style={[
            styles.btnsmd,
            styles.shadowProp,
            shouldShow ? { backgroundColor: "#2ED1C0" } : null,
          ]}
        >
          <Text style={[styles.txtsmd, shouldShow ? { color: "#FFFFFF" } : null]}>Vendor</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "white", height: "100%", marginTop: 15 }}>
        {shouldShow ? (
          <ScrollView>
            <View style={styles.listContainer}>
              {vendors.map((item) => {
                return <Vendor key={item.name} item={item} />;
              })}
            </View>
          </ScrollView>
        ) : (
          <View
            contentContainerStyle={{ padding: 9 }}
            vertical
            showsVerticalScrollIndicator={false}
          >
            <Product products={productsFiltered} />
          </View>
        )}
      </View>

      </View>
    </SafeAreaView>
  );
};

export default ListItem;
