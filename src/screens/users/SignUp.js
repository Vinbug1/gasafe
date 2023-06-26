
import React, { useState, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
// import Icon from "react-native-vector-icons/FontAwesome";
import mime from "mime";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";

const SignUp = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState(null);
  const [mainImage, setMainImage] = useState("");

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

  const handleOptionChange = (option) => {
    setRole(option);
    setSelectedOption(option);
    //setShowAdditionalFields(option === "vendor");
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const register = async () => {
    if (
      email === "" ||
      name === "" ||
      phoneNumber === "" ||
      password === "" ||
      role === ""
    ) {
      setError("Please fill in the form correctly");
      return;
    }

    let vendorData = {
      image: image,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      role: role,
    };
    await AsyncStorage.setItem("vendorData", JSON.stringify(vendorData));
    if (role !== "vendor") {
      navigation.navigate("BuyerScreen");
    } else {
      navigation.navigate("BankScreen");
    }
  };

  return (
    <SafeAreaView style={styles.subContain}>
      <View style={{ alignSelf: "center",marginTop:75 }}>
        <Text style={{ fontSize: 16, alignSelf: "center", color: "#FFFFFF" }}>
          Hello dear,
        </Text>
        <Text style={styles.signtxt}> Welcome to Gasafe</Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => scrollToBottom()}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.imagejv} source={{ uri: mainImage }} />
          <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
            {/* <Icon name="plus" size={30} color="#D12E3F" /> */}
          </TouchableOpacity>
        </View>

        <Input
          placeholder="Full Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <Input
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
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

        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleOptionChange}
            value={selectedOption}
            items={[
              { label: "vendor", value: "vendor" },
              { label: "buyer", value: "buyer" },
            ]}
          />
        </View>
        <View style={styles.btnm}>
          <TouchableOpacity onPress={register} style={styles.mdbtn}>
            <Text style={styles.textsm}>Processed</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: 10,
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={{ color: "white", fontSize: 14 }}>
              Have an account already?:
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#D12E3F" }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;


// import {Text,View,SafeAreaView,TouchableOpacity,Image,ScrollView} from "react-native";
// import React, { useState,useRef } from "react";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { useNavigation } from "@react-navigation/native";
// import Toast from "react-native-root-toast";
// import axios from "axios";
// import { Dropdown } from "react-native-element-dropdown";
// import baseUrl from "../../../assets/common/baseUrl";
// import styles from "../../shared/MainStyle";
// import Input from "../../shared/Input";
// import * as ImagePicker from "expo-image-picker";
// import Icon from "react-native-vector-icons/FontAwesome";
// import mime from "mime";
// import RNPickerSelect from "react-native-picker-select";
// import services from '../../shared/dropdown/GasService';
// import banks from "../../shared/dropdown/Bank";

// const SignUp = () => {
//   const navigation = useNavigation();
//   const scrollViewRef = useRef(null);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [showAdditionalFields, setShowAdditionalFields] = useState(false);
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [password, setPassword] = useState();
//   const [role, setRole] = useState();
//   const [image, setImage] = useState(null);
//   const [mainImage, setMainImage] = useState();
//   const [businessName, setBusinessName] = useState();
//   const [businessPhone, setBusinessPhone] = useState();
//   const [businessEmail, setBusinessEmail] = useState();
//   const [address, setAddress] = useState();
//   const [service, setService] = useState();
//   const [serviceCharge, setServiceCharge] = useState();
//   const [deliveryCharge, setDeliveryCharge] = useState();
//   const [bank, setBank] = useState();
//   const [accountNumber, setAccountNumber] = useState();
//   const [accountName, setAccountName] = useState();

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setMainImage(result.uri);
//       setImage(result.uri);
//       //setImage(result.uri);
//     }
//   };
  
//   const renderService = (services) => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.textItem}>{services.name}</Text>
//         {services.name === services.name}
//       </View>
//     );
//   };

//   const renderBank = (banks) => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.textItem}>{banks.name}</Text>
//         {banks.name === banks.name}
//       </View>
//     );
//   };

// const handleOptionChange = (option) => {
//      setRole(option)
//     setSelectedOption(option);
//     setShowAdditionalFields(option === "vendor");
//   };
//   const scrollToBottom = () => {
//     scrollViewRef.current.scrollToEnd({ animated: true });
//   };

//     // const register = () => {
//     //   //let userData = new FormData();
  
//     //   const newImageUri = "file:///" + image.split("file:/").join("");
//     //   let userData = {
//     //     image: {
//     //       uri: newImageUri,
//     //       type: mime.getType(newImageUri),
//     //       name: newImageUri.split("/").pop(),
//     //     },
       
//     //   name: name,
//     //   email: email,
//     //   phoneNumber: phoneNumber,
//     //   password: password,
//     //   role: role,
//     //   image: image,
//     //   businessName: businessName,
//     //   businessPhone: businessPhone,
//     //   businessEmail: businessEmail,
//     //   address: address,
//     //   service: service,
//     //   serviceCharge: serviceCharge,
//     //   deliveryCharge: deliveryCharge,
//     //   bank: bank,
//     //   accountName: accountName,
//     //   accountNumber: accountNumber,
//     //   };
//     //   if (
//     //     email === "" ||
//     //     name === "" ||
//     //     phoneNumber === "" ||
//     //     password === "" ||
//     //     role === ""
//     //   ) {
//     //     setError("Please fill in the form correctly");
        
//     //   } else {
//     //     axios
//     //     .post(`${baseUrl}users/register`, userData)
//     //     .then((res) => {
//     //       console.log('Still working ', userData)
//     //       if (res.status == 200 || res.status == 201) {
//     //         Toast.show("Vendor created successfully", Toast.LENGTH_SHORT);
//     //         navigation.navigate("SignIn");
//     //       }
//     //     }).catch((error) => {
//     //         Toast.show(error.message, Toast.LENGTH_SHORT);
//     //        console.log(error.message);
//     //       });
//     //   }
//     // };
//     const register = () => {
//       const newImageUri = "file:///" + image.split("file:/").join("");
//       let userData = new FormData();
//       userData.append("image", {
//         uri: newImageUri,
//         type: mime.getType(newImageUri),
//         name: newImageUri.split("/").pop(),
//       });
//       userData.append("name", name);
//       userData.append("email", email);
//       userData.append("phoneNumber", phoneNumber);
//       userData.append("password", password);
//       userData.append("role", role);
//       userData.append("businessName", businessName);
//       userData.append("businessPhone", businessPhone);
//       userData.append("businessEmail", businessEmail);
//       userData.append("address", address);
//       userData.append("service", service);
//       userData.append("serviceCharge", serviceCharge);
//       userData.append("deliveryCharge", deliveryCharge);
//       userData.append("bank", bank);
//       userData.append("accountName", accountName);
//       userData.append("accountNumber", accountNumber);
    
//       if (
//         email === "" ||
//         name === "" ||
//         phoneNumber === "" ||
//         password === "" ||
//         role === ""
//       ) {
//         setError("Please fill in the form correctly");
//       } 


//       // else {
//       //   axios
//       //     .post(`${baseUrl}users/register`, userData)
//       //     .then((res) => {
//       //       if (res.status === 200 || res.status === 201) {
//       //         Toast.show("Vendor created successfully", Toast.LENGTH_SHORT);
//       //         navigation.navigate("SignIn");
//       //       }
//       //     })
//       //     .catch((error) => {
//       //       if (error.response) {
//       //         // The request was made and the server responded with a status code
//       //         // that falls out of the range of 2xx
//       //         const { data } = error.response;
//       //         Toast.show(data.message, Toast.LENGTH_SHORT);
//       //         console.log(data);
//       //       } else if (error.request) {
//       //         // The request was made but no response was received
//       //         // `error.request` is an instance of XMLHttpRequest in the browser
//       //         Toast.show("No response from the server", Toast.LENGTH_SHORT);
//       //         console.log(error.request);
//       //       } else {
//       //         // Something happened in setting up the request that triggered an Error
//       //         Toast.show("Error in request setup", Toast.LENGTH_SHORT);
//       //         console.log("Error", error.message);
//       //       }
//       //     });
//       // }
//     };
    
    


//   return (
//     <SafeAreaView style={styles.subContain}>
//       <View style={{ alignSelf: "center", marginTop: 5 }}>
//         <Text style={{ fontSize: 16, alignSelf: "center", color: "#FFFFFF" }}>
//           Hello dear,
//         </Text>
//         <Text style={styles.signtxt}> Welcome to Gasafe</Text>
//       </View>
//       {/* <View style={styles.sigvw}> */}
//           <ScrollView ref={scrollViewRef} 
//            showsVerticalScrollIndicator={false}
//           onContentSizeChange={() => scrollToBottom()}>
//              {/* <KeyboardAwareScrollView enableAutomaticScroll={true}> */}
//             <View style={styles.imageContainer}>
//               <Image style={styles.imagejv} source={{ uri: mainImage }} />
//               <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
//                 <Icon style={{ color: "white" }} name="camera" />
//               </TouchableOpacity>
//             </View>

//             <Input
//               placeholder="Name"
//               onChangeText={(text) => setName(text)}
//               value={name}
//             />

//             <Input
//               placeholder="Phone Number"
//               onChangeText={(text) => setPhoneNumber(text)}
//               value={phoneNumber}
//             />

//             <Input
//               placeholder="Email Address"
//               onChangeText={(text) => setEmail(text)}
//               value={email}
//             />
//             <Input
//               placeholder="Password"
//               onChangeText={(text) => setPassword(text)}
//               value={password}
//               secureTextEntry={true}
//             />
//             <View style={styles.dropdown}>
//               <RNPickerSelect
//                 onValueChange={handleOptionChange}
//                 value={selectedOption}
//                 items={[
//                   { label: "Vendor", value: "vendor" },
//                   { label: "Buyer", value: "buyer" },
//                 ]}
//               />
//             </View>
//             {showAdditionalFields && (
//               <View>
//                 <Input
//                   placeholder="businessName"
//                   onChangeText={(text) => setBusinessName(text)}
//                   value={businessName}
//                 />

//                 <Input
//                   placeholder="businessPhone"
//                   onChangeText={(text) => setBusinessPhone(text)}
//                   value={businessPhone}
//                 />

//                 <Input
//                   placeholder="businessEmail"
//                   onChangeText={(text) => setBusinessEmail(text)}
//                   value={businessEmail}
//                 />
//                 <Input
//                   placeholder="address"
//                   onChangeText={(text) => setAddress(text)}
//                   value={address}
//                 />

//                 <Dropdown
//                   style={styles.dropdown}
//                   placeholderStyle={styles.placeholderStyle}
//                   selectedTextStyle={styles.selectedTextStyle}
//                   inputSearchStyle={styles.inputSearchStyle}
//                   iconStyle={styles.iconStyle}
//                   data={services}
//                   search
//                   maxHeight={300}
//                   labelField="name"
//                   valueField="name"
//                   placeholder="select services"
//                   searchPlaceholder="Search..."
//                   value={service}
//                   onChange={(services) => {
//                     setService(services.name);
//                   }}
//                   renderItem={renderService}
//                 />

//                 <Input
//                   placeholder="serviceChaerge"
//                   onChangeText={(text) => setServiceCharge(text)}
//                   value={serviceCharge}
//                 />
//                 <Input
//                   placeholder="deliveryChaerge"
//                   onChangeText={(text) => setDeliveryCharge(text)}
//                   value={deliveryCharge}
//                 />
//                 <Dropdown
//                   style={styles.dropdown}
//                   placeholderStyle={styles.placeholderStyle}
//                   selectedTextStyle={styles.selectedTextStyle}
//                   inputSearchStyle={styles.inputSearchStyle}
//                   iconStyle={styles.iconStyle}
//                   data={banks}
//                   search
//                   maxHeight={300}
//                   labelField="name"
//                   valueField="name"
//                   placeholder="select bank"
//                   searchPlaceholder="Search..."
//                   value={bank}
//                   onChange={(banks) => {
//                     setBank(banks.name);
//                   }}
//                   renderItem={renderBank}
//                 />
//                 <Input
//                   placeholder="AccountNumber"
//                   onChangeText={(text) => setAccountNumber(text)}
//                   value={accountNumber}
//                 />
//                 <Input
//                   placeholder="AccountName"
//                   onChangeText={(text) => setAccountName(text)}
//                   value={accountName}
//                 />
//               </View>
//             )}
//           <View style={styles.btnm}>
//             <TouchableOpacity
//               // onPress={() => navigation.navigate("VendorSignUp")}
//               onPress={() => register()}
//               style={styles.mdbtn}
//             >
//               <Text style={styles.textsm}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <TouchableOpacity
//               style={{
//                 alignSelf: "center",
//                 marginTop: 10,
//                 flexDirection: "row",
//               }}
//               //onPress={() => navigation.navigate("VendorSignUp")}
//               onPress={() => navigation.navigate("SignIn")}
//             >
//               <Text style={{ color: "white", fontSize: 14 }}>
//                 Have an account already?:
//               </Text>
//               <Text
//                 style={{ fontSize: 16, fontWeight: "bold", color: "#D12E3F" }}
//               >
//                 Log In
//               </Text>
//             </TouchableOpacity>
//           </View>
//         {/* </KeyboardAwareScrollView> */}
//         </ScrollView>
//       {/* </View> */}
//     </SafeAreaView>
//   );
// };

// export default SignUp;
