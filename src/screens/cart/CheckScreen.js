import React, { useState, } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
// import baseUrl from "../Redux/common/baseUrl";
import styles from "../../shared/MainStyle.js";
import { AntDesign } from '@expo/vector-icons'; 
import { Text,View,SafeAreaView,TouchableOpacity,Image,ScrollView} from "react-native";


const CheckScreen = ({route}) => {
    const navigation = useNavigation();
    const {gasData} = route.params;
    const [userVendor, setUserVendor] = useState();
    const [numberOfCylinder, setNumberOfCylinder] = useState();
        
  
    async function save(key, value) {
      await SecureStore.setItemAsync(key, value);
    }
  
    const handleSubmitPress = () => {
      if (!cylinderWeight) {
        Toast.show(" businessName field can not be empty", Toast.LENGTH_SHORT);
      } else if (!numberOfCylinder) {
        Toast.show("businessPhone field can not be empty", Toast.LENGTH_SHORT);
        return;      
      }else {
        let dataToSend = {
          newpassword: cylinderWeight,
          confirmpassword: numberOfCylinder,
        };
  
        //API_Public.post("register", JSON.stringify(dataToSend))
        axios({
          method: "POST",
          url: `${baseUrl}users/refillOrder`,
          data: JSON.stringify(dataToSend),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((responseJson) => {
            if (responseJson.status === 200) {
              const accessToken = responseJson.data;
              save("secureToken", accessToken); 
              navigation.navigate("MapScreen");
            }
          })
          .catch((error) => {
            Toast.show(error.message, Toast.LENGTH_SHORT);
          });
      }
    };

  return (
    <SafeAreaView style={styles.sigw}>
    <View>
        <TouchableOpacity style={{left:8,top:5}} onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircleo" size={28} color="#ffff" />
        </TouchableOpacity>
    </View>
        <Image  source={require('../../../assets/images/gasafe/gas_cylinders-removebg-preview.png')} style={{height:"10%",width:"100%", marginTop:5}} resizeMode='contain'/>
     <View >
     <View style={{ flexDirection:'row' }}>
     <Image  source={require('../../../assets/images/gasafe/carp.png')} style={{height:"90%",width:"50%", marginTop:5}} resizeMode='contain'/>
     <View style={{paddingBottom:10}}>
          <Text style={{fontSize: 13, fontWeight: "bold", alignSelf: "center",color: '#black' }}>
            Order recieved!!!
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "normal", alignSelf: "center",color: '#black' }}>
            Fast delievery is our motor
          </Text>
          <Text style={{fontSize: 12, fontWeight: "normal", alignSelf: "center",color: '#black' }}>
            we will be with you soon.
          </Text>
     </View>
    </View>
    <View style={{backgroundColor:'white',height:"100%",marginBottom:20}}>
        {/* <View style={{backgroundColor:'black',height:"100%",}}  >           */}
            <View style={{marginTop:35}} >
                <View style={styles.checkhd}>
                    <Text style={styles.checktt}>Total</Text>
                    <Text style={styles.checktt}>₦ {gasData.qtyPrice}</Text>
                </View>
                <View style={styles.checkhd}>
                    <Text style={styles.checknm}>Gas</Text>
                    <Text style={styles.checktxt}>₦ {gasData.gasPrice}</Text>
                </View>
                <View style={styles.checkhd}>
                    <Text style={styles.checknm}>Delievery</Text>
                    <Text style={styles.checktx}>₦ {}</Text>
                </View>
                <View style={styles.checkhd}>
                    <Text style={styles.checknm}>Vat</Text>
                    <Text style={styles.checktxt}>₦ 7.5%</Text>
                </View>
            </View>
            <View  style={{ height: 0.25, width: "99%", backgroundColor: "#2ED1C0",alignSelf:'center' }} />
            <View style={{marginTop:12}} >
            <View style={styles.checkhd}>
                    <Text style={styles.checknm}>Discount</Text>
                    <Text style={styles.checktx}>₦ {}</Text>
                </View>
                <View style={styles.checkhd}>
                    <Text style={styles.checknm}>Total</Text>
                    <Text style={styles.checktx}>₦ {gasData.qtyPrice}</Text>
                </View>
            </View>
            <View  style={{ height: 0.25, width: "99%", backgroundColor: "#2ED1C0",alignSelf:'center' }} />
            <View style={{marginTop:12}} >
                <View style={styles.checkhd}>
                    <Text style={styles.checknm}>Total Charge</Text>
                    <Text style={styles.checktx}>₦ {gasData.qtyPrice}</Text>
                </View>
            </View>
            
          <View style={styles.btnlg}>
            <TouchableOpacity 
             onPress={() =>  navigation.navigate("MapScreen")}
             //onPress={() => handleSubmitPress()}
              >
              <Text style={styles.textsm}>Proceed</Text>
            </TouchableOpacity>
          </View>
        {/* </View> */}

    </View>
     </View>
  </SafeAreaView>
  )
}

export default CheckScreen