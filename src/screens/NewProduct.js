import { Text,View,SafeAreaView,TouchableOpacity,Image,Platform,ScrollView} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
// import { getUseData, getLastUser } from "../Redux/features/userSlice";
// import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
 import styles from "../shared/MainStyle";
import Input from "../shared/Input";
import { AntDesign } from '@expo/vector-icons'; 

const NewProduct = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState();
  const [amount, setAmount] = useState();
  const [productName, setProductName] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [productImg, setProductImg] = useState();


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const offtoggleModal = () => {
    setModalVisible(false);
  };

  const showIdPicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setProductImg(result.uri);
      toggleModal();
    }
  };

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const handleSubmitPress = () => {
    if (!weight) {
      Toast.show(" Weight field can not be empty", Toast.LENGTH_SHORT);
    } else if (!amount) {
      Toast.show("amount field can not be empty", Toast.LENGTH_SHORT);
      return;
    } else if (!productImg) {
      Toast.show("productImg field can not be empty", Toast.LENGTH_SHORT);
      return;
    } else if (!productName) {
      Toast.show("productName field can not be empty", Toast.LENGTH_SHORT);
      return;
    } else {
      let dataToSend = {
        weight: weight,
        amount: amount,
        productImg: productImg,
        productName: productName,
       
      };

      //API_Public.post("register", JSON.stringify(dataToSend))
      axios({
        method: "POST",
        url: `${baseUrl}products`,
        data: JSON.stringify(dataToSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((responseJson) => {
          if (responseJson.status === 200) {
            const accessToken = responseJson.data;
            save("secureToken", accessToken);
            // let userdata = {
            //   email: userEmail,
            //   fullname: firstName + " " + lastName,
            //   phone: userPhone,
            //   address: userAddress,
            //   // pin: userPin,
            //   userToken: accessToken,
            // };
            // let lastUserName = {
            //   email: userEmail,
            //   fullname: firstName + " " + lastName,
            // };
            // dispatch(getUseData(userdata));
            // dispatch(getLastUser(lastUserName));

            navigation.navigate("MainScreen");
          }
        })
        .catch((error) => {
          Toast.show(error.message, Toast.LENGTH_SHORT);
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
            As a Vendor
          </Text>
    </View>
     <View style={styles.sigvw}>
     <View style={{marginTop:45,alignSelf:'center'}}>
          <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>New Product</Text>
        </View>
        <KeyboardAwareScrollView
          extraHeight={30}
          //enableAutomaticScroll={true}
          style={{marginTop:25}}
        >
        
        <View style={{ flexDirection: "row", width:"86%",marginLeft:25}}>
                  <View style={styles.dropvw}>
                    <Image source={{ uri: productImg }} style={styles.image} resizeMode="cover" />
                  </View>
                  <TouchableOpacity style={styles.imbtn} onPress={() =>  showIdPicker()}>
                    <Text style={styles.textt}>File</Text>
                  </TouchableOpacity>
          </View>

          <Input
            placeholder="ProductName"
            onChangeText={(text) => setProductName(text)}
            value={productName}
          />

           <Input
            placeholder="weight"
            onChangeText={(text) => setWeight(text)}
            value={weight}
          />
        
          <Input
            placeholder="amount"
            onChangeText={(text) => setAmount(text)}
            value={amount}
          />
          
          <View style={styles.btnm}>
            <TouchableOpacity  onPress={() => handleSubmitPress()} style={styles.mdbtn}>
              <Text style={styles.textsm}>UpLoad</Text>
            </TouchableOpacity>
          </View>
      
        </KeyboardAwareScrollView>
     </View>
  </SafeAreaView>
  )
}

export default NewProduct