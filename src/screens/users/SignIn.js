import { Text, View, SafeAreaView, TouchableOpacity,Image } from "react-native";
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
// import { useDispatch } from "react-redux";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
// import { getUseData, getLastUser } from "../Redux/features/userSlice";
import axios from "axios";
import Toast from "react-native-root-toast";
import styles from '../../shared/MainStyle';
import Input from '../../shared/Input';

const SignIn = () => {
    const navigation = useNavigation();
    // const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
  
    async function save(key, value) {
      await SecureStore.setItemAsync(key, value);
    }
  
    const storeLastUserEmail = async (value) => {
      try {
        await AsyncStorage.setItem("lastuseremail", value);
      } catch (e) {
        // saving error
      }
    };
  
    const getLastUserEmail = async () => {
      try {
        const value = await AsyncStorage.getItem("lastuseremail");
        if (value !== null) {
          setUserEmail(value);
        }
      } catch (e) {
        // error reading value
      }
    };
  
    useEffect(() => {
      getLastUserEmail();
    }, []);
  
    const handleSubmitPress = () => {
      if (!userEmail) {
        Toast.show(" Email field can not be empty", Toast.LENGTH_SHORT);
        return;
      } else if (!userPassword) {
        Toast.show("Password field can not be empty", Toast.LENGTH_SHORT);
        return;
      } else {
        let dataToSend = { email: userEmail, password: userPassword };
  
        axios({
          method: "POST",
          url: `${baseUrl}users/login`,
          data: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((responseJson) => {
            if (responseJson.status === 200) {
              //console.log(responseJson.data);
              storeLastUserEmail(userEmail,);
              const accessToken = responseJson.data;
              save("secureToken", accessToken);
              axios({
                method: "GET",
                url: `${baseUrl}profile`,
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }).then((responseJson) => {
                let userData = {
                  fullname:
                    responseJson.data.firstname +
                    " " +
                    responseJson.data.lastname,
                  email: responseJson.data.email,
                  phone: responseJson.data.phone,
                  address: responseJson.data.address,
                  userToken: accessToken,
                  userId: responseJson.user_id,
                };
                let lastUserName = {
                  fullname: responseJson.data.firstname + " " + responseJson.data.lastname,
                  email: responseJson.data.email,
                };
              });
              navigation.navigate("MainScreen");
            }
          })
          .catch((error) => {
            Toast.show(error.message, Toast.LENGTH_SHORT);
          });
      }
    };

  return (
    <SafeAreaView style={{marginTop:Platform.OS === 'ios' ? 0 : 45}}>
        <View style={{ alignSelf: "center",marginTop:35}}>
            <Text style={{fontSize:40,marginTop:10,color:"#2ED1C0",margin:8,alignSelf:'center'}}>Gasafe</Text>
            <Text style={{fontSize:25,marginTop:8,color:"#2ED1C0 "}}>Welcome Back</Text>
          {/* <Image /> */}
        </View>
        <View style={styles.signvw}>
            <View>
              <Text style={styles.headtxt}>SignIn</Text>
            </View>
                <KeyboardAwareScrollView  style={{marginTop:60}}>
                <View>
                    <Input
                    placeholder="Email Address"
                    onChangeText={(text) => setUserEmail(text)}
                    value={userEmail}
                    />
                    <Input
                    placeholder="Password"
                    onChangeText={(text) => setUserPassword(text)}
                    value={userPassword}
                    secureTextEntry={true}
                    />
                </View>

                <View style={styles.btnm}>
                    <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}
                    style={styles.mdbtn}
                    >
                    <Text style={styles.textsm}>SignIn</Text>
                    </TouchableOpacity>
                </View>

                {/* </View> */}
                <View
                    style={{ flexDirection: "row", alignSelf: "center", margin: 30 }}
                >
                    <Text style={{color:'white',fontSize:18}}>Don't have an account?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{ fontSize: 20, fontWeight: "bold",color: "#D12E3F" }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAwareScrollView>
        </View>
    </SafeAreaView>
  )
}

export default SignIn