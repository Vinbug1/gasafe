import { Text,View,SafeAreaView,TouchableOpacity,Platform,ScrollView} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
// import { getUseData, getLastUser } from "../Redux/features/userSlice";
// import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
// import baseUrl from "../Redux/common/baseUrl";
 import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import users from "../../shared/dropdown/UserCategory"

const SignUp = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  let userData = {name: name,email: email,password: password,phone: phone,role: role,isAdmin: false};

  const register = () => {
    if (email === "" || name === "" || phone === "" || password === ""||role === "") {
      setError("Please fill in the form correctly");
    }else if(role === "Vendor"){
          navigation.navigate('VendorSignUp', {userData:userData})
    }else{
      axios.post(`${baseURL}users/register`,userData).then((res) => {
          if (res.status == 200) {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: "Registration Succeeded",
              text2: "Please Login into your account",
            });
            setTimeout(() => {
              props.navigation.navigate("Login");
            }, 500);
          }
        }).catch((error) => {
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Something went wrong",
            text2: "Please try again",
          });
        });
    }
  };

  // async function save(key, value) {
  //   await SecureStore.setItemAsync(key, value);
  // }

  const renderUser = (users) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{users.name}</Text>
        {users.name === users.name}
      </View>
    );
  };

  // const handleSubmitPress = () => {
  //   if (!userEmail) {
  //     Toast.show(" Email field can not be empty", Toast.LENGTH_SHORT);
  //   } else if (!userPhone) {
  //     Toast.show("Phone field can not be empty", Toast.LENGTH_SHORT);
  //     return;
  //   } else if (!firstName) {
  //     Toast.show("firstName field can not be empty", Toast.LENGTH_SHORT);
  //     return;
  //   } else if (!lastName) {
  //     Toast.show("lastName field can not be empty", Toast.LENGTH_SHORT);
  //     return;
  //   } else if (!password) {
  //     Toast.show("Password field can not be empty", Toast.LENGTH_SHORT);
  //     return;
  //   } else if (!role) {
  //     Toast.show("role field can not be empty", Toast.LENGTH_SHORT);
  //     return;
  //   } else {
  //     let dataToSend = {
  //       email: userEmail,
  //       password: password,
  //       phone: userPhone,
  //       firstname: firstName,
  //       lastname: lastName,
  //       role: role,
  //     };

  //     //API_Public.post("register", JSON.stringify(dataToSend))
  //     axios({
  //       method: "POST",
  //       url: `${baseUrl}users/register`,
  //       data: JSON.stringify(dataToSend),
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     }).then((responseJson) => {
  //         if (responseJson.status === 200) {
  //           const accessToken = responseJson.data;
  //           save("secureToken", accessToken);
  //           let userdata = {
  //             email: userEmail,
  //             fullname: firstName + " " + lastName,
  //             phone: userPhone,
  //             address: userAddress,
  //             // pin: userPin,
  //             userToken: accessToken,
  //           };
  //           let lastUserName = {
  //             email: userEmail,
  //             fullname: firstName + " " + lastName,
  //           };
  //           // dispatch(getUseData(userdata));
  //           // dispatch(getLastUser(lastUserName));

  //           navigation.navigate("MainScreen");
  //         }
  //       })
  //       .catch((error) => {
  //         Toast.show(error.message, Toast.LENGTH_SHORT);
  //       });
  //   }
  // };

  return (
      <SafeAreaView style={styles.subContain}>
        <View style={{ alignSelf: "center", marginTop: 35 }}>
                <Text style={{ fontSize: 16, alignSelf: "center",color:'#FFFFFF' }}>
                Hi Dear,
              </Text>
              <Text style={styles.signtxt}> Welcome Gasafe</Text>
        </View>
         <View style={styles.sigvw}>
         <View>
              <Text style={styles.signtxt}>SignUp</Text>
            </View>
            <KeyboardAwareScrollView
              extraHeight={30}
              enableAutomaticScroll={true}
            >
              <Input
                placeholder="Name"
                onChangeText={(text) => 
                  setName(text)
                }
                value={name}
              />
              
            
              <Input
                placeholder="Phone Number"
                onChangeText={(text) => setPhone(text)}
                value={phone}
              />
            
              <Input
                placeholder="Email Address"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <Input
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
              />
                
              <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={users}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="select user"
              searchPlaceholder="Search..."
              value={role}
              onChange={(users) => {
                setRole(users.name);
              }}
              renderItem={renderUser}
            />
              <View style={styles.btnm}>
                <TouchableOpacity
                          // onPress={() => navigation.navigate("VendorSignUp")}  
                onPress={() => register()} 
                style={styles.mdbtn}>
                  <Text style={styles.textsm}>Submit</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    marginTop: 10,
                    flexDirection: "row",
                  }}
                  //onPress={() => navigation.navigate("VendorSignUp")}
                  onPress={() => navigation.navigate("SignIn")}
                >
                  <Text style={{color:'white',fontSize:14}}>Have an account already?:</Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#D12E3F" }}
                  >
                    Log In
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
         </View>
      </SafeAreaView>
  );
};

export default SignUp;
