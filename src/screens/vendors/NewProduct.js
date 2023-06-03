import React, { useState, useEffect } from "react";
import {View,Text,Image,TouchableOpacity,Platform } from "react-native";
import { Picker } from "native-base";
import Error from "../../shared/Error";
import Icon from "react-native-vector-icons/FontAwesome";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseUrl from "../../../assets/common/baseUrl";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
 import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import { AntDesign } from '@expo/vector-icons'; 

const NewProduct = (props) => {
  const [vendorNames, setVendorNames] = useState();
  const [vendor, setVendor] = useState();
  const [businessName, setBusinessName] = useState();
  const [productName, setProductName] = useState();
  const [image, setImage] = useState();
  const [mainImage, setMainImage] = useState();
  const [weight, setWeight] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [delieveryCharge, setDelieveryCharge] = useState();
  const [make, setMake] = useState([]);
  const [token, setToken] = useState();
  const [err, setError] = useState();
  const [countInStock, setCountInStock] = useState();
  const [rating, setRating] = useState(0);
  const [isFeatured, setIsFeature] = useState(false);
  // const [richDescription, setRichDescription] = useState();
  const [numReviews, setNumReviews] = useState(0);
  const [item, setItem] = useState(null);

  const rendervendor = (vendorNames) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{vendorNames.name}</Text>
        {vendorNames.name === vendorNames.name}
      </View>
    );
  };

  useEffect(() => {
    // if (!props.route.params) {
    //   setItem(null);
    // } else {
    //   setItem(props.route.params.item);
    //   setWeight(props.route.params.item.weight);
    //   setName(props.route.params.item.name);
    //   setPrice(props.route.params.item.price.toString());
    //   setDescription(props.route.params.item.description);
    //   setMainImage(props.route.params.item.image);
    //   setImage(props.route.params.item.image);
    //   setCategory(props.route.params.item.category._id);
    //   setCountInStock(props.route.params.item.countInStock.toString());
    // }
    AsyncStorage.getItem("jwt")
      .then((res) => {
        setToken(res);
      })
      .catch((error) => console.log(error));

    // Categories
    axios
      .get(`${baseUrl}vendors`)
      .then((res) => setVendorNames(res.data))
      .catch((error) => alert("Error to load Vendors"));

    // Image Picker
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();

    return () => {
      setVendorName([]);
    };
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setMainImage(result.uri);
      setImage(result.uri);
    }
  };

  const addProduct = () => {
    if (
      vendor == ""||
      productName == "" ||
      image == "" ||
      delieveryCharge == "" ||
      price == "" ||
      description == "" ||
      make == "" ||
      weight == "" ||
      countInStock == ""||
      rating == "" ||
      isFeatured == "" 
    ) {
      setError("Please fill in the form correctly");
    }

    let formData = new FormData();

    const newImageUri = "file:///" + image.split("file:/").join("");

    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    formData.append("vendor", vendor);
    formData.append("businessName", businessName);
    formData.append("productName", productName);
    formData.append("delieveryCharge", delieveryCharge);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("countInStock", countInStock);
    formData.append("weight", weight);
    formData.append("rating", rating);
    formData.append("make", make);
    formData.append("numReviews", numReviews);
    formData.append("isFeatured", isFeatured);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    if (item !== null) {
      axios
        .put(`${baseUrl}products/${item.id}`, formData, config)
        .then((res) => {
          if (res.status == 200 || res.status == 201) {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: "Product successfuly updated",
              text2: "",
            });
            setTimeout(() => {
              props.navigation.navigate("Products");
            }, 500);
          }
        })
        .catch((error) => {
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Something went wrong",
            text2: "Please try again",
          });
        });
    } else {
      axios
        .post(`${baseUrl}products`, formData, config)
        .then((res) => {
          if (res.status == 200 || res.status == 201) {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: "New Product added",
              text2: "",
            });
            setTimeout(() => {
              props.navigation.navigate("Products");
            }, 500);
          }
        })
        .catch((error) => {
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Something went wrong",
            text2: "Please try again",
          });
        });
    }
  };

  return (
    <SafeAreaView>
    <View>
        <TouchableOpacity style={{left:8}} onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircleo" size={28} color="#2ED1C0" />
        </TouchableOpacity>
    </View>
    <View style={{ alignSelf: "center", marginTop: 35 }}>
        <Text style={{ padding: 8,marginTop:12, fontSize: 25, fontWeight: "bold", alignSelf: "center" }}>
            New Product
        </Text>
    </View>
     <View style={styles.sigvw}>
     <View style={{marginTop:45,alignSelf:'center'}}>
          <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>New Product</Text>
      </View>
        <KeyboardAwareScrollView extraHeight={30} style={{marginTop:25}} >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: mainImage }} />
            <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
              <Icon style={{ color: "white" }} name="camera" />
            </TouchableOpacity>
         </View>

         <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={vendorNames}
                  search
                  maxHeight={300}
                  labelField="name"
                  valueField="name"
                  placeholder="select vendor"
                  searchPlaceholder="Search..."
                  value={vendorNames}
                  onChange={(vendorNames) => {
                    setVendor(vendorNames.name);
                  }}
                  renderItem={rendervendor}
                />

          <Input
            placeholder="BusinessName"
            onChangeText={(text) => setBusinessName(text)}
            value={businessName}
          />
          <Input
            placeholder="ProductName"
            onChangeText={(text) => setProductName(text)}
            value={productName}
          />

           <Input
            placeholder="description"
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
          <Input
            placeholder="make"
            onChangeText={(text) => setMake(text)}
            value={make}
          />

           <Input
            placeholder="weight"
            onChangeText={(text) => setWeight(text)}
            value={weight}
          />

          <Input
            placeholder="delieveryCharge"
            onChangeText={(text) => setDelieveryCharge(text)}
            value={delieveryCharge}
          />
        
          <Input
            placeholder="price"
            onChangeText={(text) => setPrice(text)}
            value={price}
          />
           <View picker>
        <Picker
          mode="dropdown"
          iosIcon={<Icon color={"#007aff"} name="arrow-down" />}
          style={{ width: undefined }}
          placeholder="Select your Category"
          selectedValue={pickerValue}
          placeholderStyle={{ color: "#007aff" }}
          placeholderIconColor="#007aff"
          onValueChange={(e) => [setPickerValue(e), setCategory(e)]}
        >
          {categories.map((c) => {
            return <Picker.Item key={c.id} label={c.name} value={c.id} />;
          })}
        </Picker>
      </View>
          {err ? <Error message={err} /> : null}
          <View style={styles.btnm}>
            <TouchableOpacity  onPress={() => addProduct()} style={styles.mdbtn}>
              <Text style={styles.textsm}>UpLoad</Text>
            </TouchableOpacity>
          </View>
      
        </KeyboardAwareScrollView>
     </View>
  </SafeAreaView>
  )
}

export default NewProduct