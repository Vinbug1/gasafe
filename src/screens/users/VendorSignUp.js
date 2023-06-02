import { Text,View,SafeAreaView,TouchableOpacity,Image,ScrollView} from "react-native";
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
import states from '../../shared/dropdown/States';
import lgas from '../../shared/dropdown/Lga';
import banks from '../../shared/dropdown/Bank';
import { AntDesign } from '@expo/vector-icons'; 


const VendorSignUp = ({route}) => {
  const {userData} = route.params;
    const navigation = useNavigation();
    const [businessName, setBusinessName] = useState();
    const [businessPhone, setBusinessPhone] = useState();
    const [businessEmail, setBusinessEmail] = useState();
    const [nin, setNin] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [bank, setBank] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [accountName, setAccountName] = useState();
    const [isModalVisible, setModalVisible] = useState(false);
    const [validId, setValidId] = useState();
    
  
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
      let dataToSend = {
        userData:userData,
        businessname: businessName,
        businessphone: businessPhone,
        businessemail: businessEmail,
        state: state,
        city: city,
        bank: bank,
        nin: nin,
        accountnumber: accountNumber,
        accountname: accountName,
        validId: validId,
      };
      if (businessName === "" || businessPhone || businessEmail === "" || state === "" ||  city === "" || bank === "" || accountNumber === "" || accountName === "" || validId === "") {
        Toast.show("All fields are required", Toast.LENGTH_SHORT);
      }else {      
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
              navigation.navigate("SignIn");
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
              enableAutomaticScroll={true}
              style={{marginTop:15}}
            >
              <ScrollView horizontal>
                <Input
                  placeholder="businessName"
                  onChangeText={(text) => setBusinessName(text)}
                  value={businessName}
                  />

                  <Input
                    placeholder="businessPhone"
                    onChangeText={(text) => setBusinessPhone(text)}
                    value={businessPhone}
                  />
                
                  <Input
                    placeholder="businessEmail"
                    onChangeText={(text) => setBusinessEmail(text)}
                    value={businessEmail}
                  />
                  
                <Input
                    placeholder="Nin"
                    onChangeText={(text) => setNin(text)}
                    value={nin}
                  />
                 
                  <View
                      style={{ flexDirection: "row", width:"86%",marginLeft:25}}>
                      <View style={styles.dropvw}>
                        <Image source={{ uri: validId }} style={styles.image} resizeMode="cover" />
                      </View>
                      <TouchableOpacity style={styles.imbtn} onPress={() =>  showIdPicker()}>
                        <Text style={styles.textt}>File</Text>
                      </TouchableOpacity>
                    </View>

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
                
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={banks}
                  search
                  maxHeight={300}
                  labelField="name"
                  valueField="name"
                  placeholder="select bank"
                  searchPlaceholder="Search..."
                  value={bank}
                  onChange={(banks) => {
                    setBank(banks.name);
                  }}
                  renderItem={renderBank}
                />
                  <Input
                    placeholder="AccountNumber"
                    onChangeText={(text) => setAccountNumber(text)}
                    value={accountNumber}
                  />
                  <Input
                    placeholder="AccountName"
                    onChangeText={(text) => setAccountName(text)}
                    value={accountName}
                  />
                  <View style={styles.btnm}>
                    <TouchableOpacity  onPress={() => handleSubmitPress()} style={styles.mdbtn}>
                      <Text style={styles.textsm}>Submit</Text>
                    </TouchableOpacity>
                  </View>

              </ScrollView>
                            
            </KeyboardAwareScrollView>
         </View>
      </SafeAreaView>
  )
}

export default VendorSignUp;