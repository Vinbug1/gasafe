import { Text,View,SafeAreaView,TouchableOpacity,Image,ScrollView} from "react-native";
import React, { useState,useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
// import { getUseData, getLastUser } from "../Redux/features/userSlice";
// import { useDispatch } from "react-redux";
// import * as SecureStore from "expo-secure-store";
import axios from "axios";
// import baseUrl from "../Redux/common/baseUrl";
 import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import { Dropdown } from "react-native-element-dropdown";
import states from '../../shared/dropdown/States';
import lgas from '../../shared/dropdown/Lga';
import banks from '../../shared/dropdown/Bank';
import services from '../../shared/dropdown/GasService';
import { AntDesign } from '@expo/vector-icons'; 
import mime from "mime";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";


const VendorBank = ({route}) => {
    const {userData} = route.params;
    const navigation = useNavigation();
    const [businessName, setBusinessName] = useState();
    const [businessPhone, setBusinessPhone] = useState();
    const [businessEmail, setBusinessEmail] = useState();
    const [nin, setNin] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [bank, setBank] = useState();
    const [service, setService] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [accountName, setAccountName] = useState();
    const [image, setImage] = useState(null);
    const [mainImage, setMainImage] = useState();
  
    
    useEffect(() => {
      // if (!props.route.params) {
      //   setItem(null);
      // } else {
      //   setBusinessName(props.route.params.businessName);
      //   setBusinessEmail(props.route.params.item.businessEmail);
      //   setBusinessPhone(props.route.params.item.businessPhone);
      //   setNin(props.route.params.item.nin.toString());
      //   setState(props.route.params.item.state);
      //   setMainImage(props.route.params.item.image);
      //   setImage(props.route.params.item.image);
      //   setCity(props.route.params.item.city);
      //   setBank(props.route.params.item.bank);
      //   setAccountName(props.route.params.item.accountName);
      //   setAccountNumber(props.route.params.item.accountNumber);
      // }
  
      AsyncStorage.getItem("jwt")
        .then((res) => {
          setToken(res);
        })
        .catch((error) => console.log(error));
  
  
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
       // setCategories([]);
      };
    }, []);
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setMainImage(result.uri);
        setImage(result.uri);
        //setImage(result.uri);
      }
    };
  
  const newVendor = () => {
      if (
        businessName == "" ||
        businessEmail == "" ||
        businessPhone == "" ||
        state == "" ||
        city == "" ||
        bank == "" ||
        nin == "" ||
        accountName == "" ||
        accountNumber == "" ||
        service == ""
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
      formData.append("userData", userData);
      formData.append("businessName", businessName);
      formData.append("businessPhone", businessPhone);
      formData.append("businessEmail", businessEmail);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("bank", bank);
      formData.append("nin", nin);
      formData.append("accountName", accountName);
      formData.append("accountNumber", accountNumber);
      formData.append("service", service);
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
  
      if (item !== null) {
        axios
          .put(`${baseURL}vendors/${item.id}`, formData, config)
          .then((res) => {
            if (res.status == 200 || res.status == 201) {
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: "Vendor successfuly updated",
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
          .post(`${baseURL}vendors`, formData, config)
          .then((res) => {
            if (res.status == 200 || res.status == 201) {
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: "Vendor created successfully",
                text2: "",
              });
              setTimeout(() => {
                 navigation.navigate("MarketScreen");
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
      const renderService = (services) => {
        return (
          <View style={styles.item}>
            <Text style={styles.textItem}>{services.name}</Text>
            {services.name === services.name}
          </View>
        );
      };

  return (
    <SafeAreaView style={styles.sigw} >
    <TouchableOpacity style={{left:8}} onPress={() => navigation.goBack()}>
       <AntDesign name="leftcircleo" size={28} color="white" />
     </TouchableOpacity>
    {/* <View style={{alignSelf:'center'}}> */}
         <Text style={{fontSize:20,color:'white',fontWeight:'bold',alignSelf:'center'}}>Business Information</Text>
       {/* </View> */}
       <KeyboardAwareScrollView
         extraHeight={30}
         enableAutomaticScroll={true}
        // style={{marginTop:5}}
       >
         <ScrollView  vertical
                   contentContainerStyle={{ marginHorizontal: 2, marginBottom:5 }}
                   showsHorizontalScrollIndicator={false} >
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
                   <Image source={{ uri: mainImage }} style={styles.imagevn} resizeMode="cover" />
                 </View>
                 <TouchableOpacity style={styles.imbtn} onPress={() =>  pickImage()}>
                   <Text style={styles.textt}>Upload</Text>
                 </TouchableOpacity>
             </View>

           <Dropdown
             style={styles.dropdown}
             placeholderStyle={styles.placeholderStyle}
             selectedTextStyle={styles.selectedTextStyle}
             inputSearchStyle={styles.inputSearchStyle}
             iconStyle={styles.iconStyle}
             data={services}
             search
             maxHeight={300}
             labelField="name"
             valueField="name"
             placeholder="select services"
             searchPlaceholder="Search..."
             value={service}
             onChange={(services) => {
               setService(services.name);
             }}
             renderItem={renderService}
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
               <TouchableOpacity  onPress={() => newVendor()} style={styles.mdbtn}>
                 <Text style={styles.textsm}>Submit</Text>
               </TouchableOpacity>
             </View>
         </ScrollView>     
       </KeyboardAwareScrollView>
 </SafeAreaView>
  )
}

export default VendorBank