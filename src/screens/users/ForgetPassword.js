import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
// import { getUseData, getLastUser } from "../Redux/features/userSlice";
// import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
// import baseUrl from "../Redux/common/baseUrl";
 import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import { AntDesign } from '@expo/vector-icons'; 
import { Text,View,SafeAreaView,TouchableOpacity,Image} from "react-native";

const ForgetPassword = () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
        
  
    async function save(key, value) {
      await SecureStore.setItemAsync(key, value);
    }
  
    const handleSubmitPress = () => {
      if (!newPassword) {
        Toast.show(" businessName field can not be empty", Toast.LENGTH_SHORT);
      } else if (!confirmPassword) {
        Toast.show("businessPhone field can not be empty", Toast.LENGTH_SHORT);
        return;      
      }else {
        let dataToSend = {
          newpassword: newPassword,
          confirmpassword: confirmPassword,
        };
  
        //API_Public.post("register", JSON.stringify(dataToSend))
        axios({
          method: "POST",
          url: `${baseUrl}users/register`,
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
    <Image  source={require('../../../assets/images/gasafe/reset_password.png')} style={{height:"9%",width:"100%", marginTop:15}} resizeMode='contain'/>

     <View style={styles.sigvw}>
     <View style={{ alignSelf: "center" }}>
          <Text style={{ padding: 8,marginTop:12, fontSize: 20, fontWeight: "bold", alignSelf: "center",color: '#fff' }}>
            New PassWord
          </Text>
    </View>
        <KeyboardAwareScrollView
          extraHeight={30}
          style={{marginTop:25}}
        >
          
                        
         <Input
          placeholder="newPassword"
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
          />

          <Input
            placeholder="confirmPassword"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
        
       
          <View style={styles.btnm}>
            <TouchableOpacity  onPress={() => handleSubmitPress()} style={styles.mdbtn}>
              <Text style={styles.textsm}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
     </View>
  </SafeAreaView>
  )
}

export default ForgetPassword