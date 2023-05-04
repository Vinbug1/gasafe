import { Text,View,SafeAreaView,TouchableOpacity,Image,Platform,ScrollView} from "react-native";
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
import { Dropdown } from "react-native-element-dropdown";
import states from '../shared/dropdown/States';
import lgas from '../shared/dropdown/Lga';
import banks from '../shared/dropdown/Bank';
import { AntDesign } from '@expo/vector-icons'; 

const BuyerSignUp = () => {
    const navigation = useNavigation();
    
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [cylinderWeight, setCylinderWeight] = useState();
   

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
          setValidId(result.uri);
          toggleModal();
        }
        };
   
       const renderState = (states) => {
          return (
            <View style={styles.item}>
              <Text style={styles.textItem}>{states.name}</Text>
              {states.name === states.name}
            </View>
          );
        };
    
        const renderLga = (lgas) => {
          return (
            <View style={styles.item}>
              <Text style={styles.textItem}>{lgas.name}</Text>
              {lgas.name === lgas.name}
            </View>
          );
        };
  
        const renderBank = (banks) => {
          return (
            <View style={styles.item}>
              <Text style={styles.textItem}>{banks.name}</Text>
              {banks.name === banks.name}
            </View>
          );
        };
  
      async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
      }
    
      const handleSubmitPress = () => {
        if (!state) {
          Toast.show(" state field can not be empty", Toast.LENGTH_SHORT);
        } else if (!city) {
          Toast.show("city field can not be empty", Toast.LENGTH_SHORT);
          return;
        } else if (!cylinderWeight) {
          Toast.show("cylinderWeight field can not be empty", Toast.LENGTH_SHORT);
          return;
        }  else {
          let dataToSend = {
            state: state,
            city: city,
            cylinderWeight: cylinderWeight,
            
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
                let userdata = {
                  email: userEmail,
                  fullname: firstName + " " + lastName,
                  phone: userPhone,
                  address: userAddress,
                  // pin: userPin,
                  userToken: accessToken,
                };
                let lastUserName = {
                  email: userEmail,
                  fullname: firstName + " " + lastName,
                };
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
     <View style={{marginTop:15,alignSelf:'center'}}>
          <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Business Information</Text>
        </View>
        <KeyboardAwareScrollView
          extraHeight={30}
          style={{marginTop:25}}
        >
        
          <Input
            placeholder="cylinderWeight"
            onChangeText={(text) => setCitylinderWeight(text)}
            value={cylinderWeight}
          />
        
         <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={states}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="select state"
          searchPlaceholder="Search..."
          value={state}
          onChange={(states) => {
            setState(states.name);
          }}
          renderItem={renderState}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={lgas}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="select city"
          searchPlaceholder="Search..."
          value={city}
          onChange={(lgas) => {
            setCity(lgas.name);
          }}
          renderItem={renderLga}
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

export default BuyerSignUp