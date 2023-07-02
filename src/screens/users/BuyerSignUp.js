import React, { useState, useCallback, useContext } from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthGlobal from "../../../Context/store/AuthGlobal";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import baseUrl from "../../../assets/common/baseUrl";
import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import mime from "mime";

const BuyerSignUp = () => {
  const context = useContext(AuthGlobal);
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [image, setImage] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [educationalQualification, setEducationalQualification] = useState();
  const [cylinderSize, setCylinderSize] = useState();
  const [cylinderCertificationStatus, setCylinderCertificationStatus] =
    useState();
  const [cylinderAge, setCylinderAge] = useState();
  const [hoseLineCheck, setHoseLineCheck] = useState();
  const [cylinderSafetyCheck, setCylinderSafetyCheck] = useState();
  const [lpgSafetyKnowledge, setLPGSafetyKnowledge] = useState();
  const [hazardousAreaClassification, setHazardousAreaClassification] =
    useState();

  const handleCylinder = (option) => {
    setCylinderCertificationStatus(option);
  };

  const handleCylinderAge = (option) => {
    setCylinderAge(option);
  };

  const handleHoseLineCheck = (option) => {
    setHoseLineCheck(option);
  };

  const handleCylinderSafetyCheck = (option) => {
    setCylinderSafetyCheck(option);
  };

  const handleLPGSafetyKnowledge = (option) => {
    setLPGSafetyKnowledge(option);
  };

  const handleHazardousAreaClassification = (option) => {
    setHazardousAreaClassification(option);
  };

  const handleSubmitPress = () => {
    const userData = new FormData();
    const newImageUri = "file:///" + image.split("file:/").join("");

    userData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    userData.append("name", name);
    userData.append("email", email);
    userData.append("phoneNumber", phoneNumber);
    userData.append("password", password);
    userData.append("role", role);
    userData.append("educationalQualification", educationalQualification);
    userData.append("gender", gender);
    userData.append("address", address);
    userData.append("cylinderSize", cylinderSize);
    userData.append("cylinderCertificationStatus", cylinderCertificationStatus);
    userData.append("cylinderAge", cylinderAge);
    userData.append("hoseLineCheck", hoseLineCheck);
    userData.append("cylinderSafetyCheck", cylinderSafetyCheck);
    userData.append("lpgSafetyKnowledge", lpgSafetyKnowledge);
    userData.append("hazardousAreaClassification", hazardousAreaClassification);


    //console.log("details info",userData);
    // axios({
    //   method: "POST",
    //   url: `${baseUrl}users/register`,
    //   data: JSON.stringify(userData),
    //   headers: {
    //     "Content-Type": "multipart/form-data; boundary=" + userData._boundary,
    //   },
    // })
    axios.post(`${baseUrl}users/register`, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((responseJson) => {
        if (responseJson.status === 200) {
          navigation.navigate("SignIn");
        }
      })
      .catch((error) => {
        Toast.show(error.message, Toast.LENGTH_SHORT);
      });
  };

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("vendorData")
        .then((userDetails) => {
          if (userDetails) {
            const user = JSON.parse(userDetails);
            ///console.log("Information fron signUp",user)
            setImage(user.image);
            setName(user.name);
            setEmail(user.email);
            setPhoneNumber(user.phoneNumber);
            setPassword(user.password);
            setRole(user.role);
          } else {
            console.log("Object not found in AsyncStorage");
          }
        })
        .catch((error) => {
          console.error("Error retrieving object:", error);
        });

      return () => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setRole("");
        setImage("");
      };
    }, [context.stateUser.isAuthenticated])
  );

  return (
    <SafeAreaView style={styles.subContain}>
      <View style={{ marginTop: 25 }}>
        <View style={{ alignSelf: "center",marginTop:20 }}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Buyer Info
          </Text>
        </View>
        <KeyboardAwareScrollView extraHeight={30} style={{ marginTop: 5 }}>
          <Input
            placeholder="Educational qualification"
            onChangeText={(text) => setEducationalQualification(text)}
            value={educationalQualification}
          />

          <Input
            placeholder="Gender"
            onChangeText={(text) => setGender(text)}
            value={gender}
          />

          <Input
            placeholder="Address"
            onChangeText={(text) => setAddress(text)}
            value={address}
          />

          <Input
            placeholder="Cylinder Size"
            onChangeText={(text) => setCylinderSize(text)}
            value={cylinderSize}
          />

          <View style={styles.dropdown}>
            <RNPickerSelect
              placeholder={{ label: "Cylinder Certification Status" }}
              onValueChange={handleCylinder}
              value={cylinderCertificationStatus}
              items={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </View>

          <Input
            placeholder="Cylinder Age / Expiring Date"
            onChangeText={(text) => setCylinderAge(text)}
            value={cylinderAge}
          />

          <View style={styles.dropdown}>
            <RNPickerSelect
              placeholder={{ label: "Hose Line Check" }}
              onValueChange={handleHoseLineCheck}
              value={hoseLineCheck}
              items={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </View>

          <View style={styles.dropdown}>
            <RNPickerSelect
              placeholder={{ label: "Cylinder Safety Check" }}
              onValueChange={handleCylinderSafetyCheck}
              value={cylinderSafetyCheck}
              items={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </View>

          <View style={styles.dropdown}>
            <RNPickerSelect
              placeholder={{ label: "LPG Safety Knowledge" }}
              onValueChange={handleLPGSafetyKnowledge}
              value={lpgSafetyKnowledge}
              items={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </View>

          <View style={styles.dropdown}>
            <RNPickerSelect
              placeholder={{ label: "Hazardous Area Classification" }}
              onValueChange={handleHazardousAreaClassification}
              value={hazardousAreaClassification}
              items={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </View>

          <View style={styles.btnm}>
            <TouchableOpacity
              onPress={() => handleSubmitPress()}
              style={styles.mdbtn}
            >
              <Text style={styles.textsm}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BuyerSignUp;

// import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
// import React, { useState, useCallback, useContext } from "react";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { useNavigation, useFocusEffect } from "@react-navigation/native";
// import Toast from "react-native-root-toast";
// // import * as SecureStore from "expo-secure-store";
// import axios from "axios";
// import baseUrl from "../../../assets/common/baseUrl";
// import styles from "../../shared/MainStyle";
// import Input from "../../shared/Input";
// // import { Dropdown } from "react-native-element-dropdown";
// // import states from "../../shared/dropdown/States";
// // import lgas from "../../shared/dropdown/Lga";
// // import banks from '../shared/dropdown/Bank';
// // import { AntDesign } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import AuthGlobal from "../../../Context/store/AuthGlobal";
// import RNPickerSelect from "react-native-picker-select";

// const BuyerSignUp = () => {
//   const context = useContext(AuthGlobal);
//   const navigation = useNavigation();
//   //const [buyerData, setBuyerData] = useState({});
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [password, setPassword] = useState();
//   const [role, setRole] = useState();
//   const [image, setImage] = useState();
//   const [gender, setGender] = useState();
//   const [address, setAddress] = useState();
//   const [educationalQualification, setEducationalQualification] = useState();
//   const [cylinderSize, setCylinderSize] = useState();
//   const [cylinderCertificationStatus, setCylinderCertificationStatus] =
//     useState();
//   const [cylinderAge, setCylinderAge] = useState();
//   const [hoseLineCheck, setHoseLineCheck] = useState();
//   const [cylinderSafetyCheck, setCylinderSafetyCheck] = useState();
//   const [lpgSafetyknowledge, setLPGSafetyKnowledge] = useState();
//   const [hazardousAreaClassification, setHazardousAreaClassification] =
//     useState();

//   const handleCylinder = (option) => {
//     setCylinderCertificationStatus(option);
//     setSelected(option);
//   };

//   const handlecylinage = (option) => {
//     setCylinderAge(option);
//     setSelected(option);
//   };

//   const handleLiner = (option) => {
//     setHoseLineCheck(option);
//     setSelected(option);
//   };

//   const handleSafe = (option) => {
//     setCylinderSafetyCheck(option);
//     setSelected(option);
//   };

//   const handleLpg = (option) => {
//     setLPGSafetyKnowledge(option);
//     setSelected(option);
//   };

//   const handleHac = (option) => {
//     setHazardousAreaClassification(option);
//     setSelected(option);
//   };

//   const handleSubmitPress = () => {
//     let userData = new FormData();
//     const newImageUri = "file:///" + image.split("file:/").join("");
//     userData.append("image", {
//       uri: newImageUri,
//       type: mime.getType(newImageUri),
//       name: newImageUri.split("/").pop(),
//     });
//     userData.append("name", name);
//     userData.append("email", email);
//     userData.append("phoneNumber", phoneNumber);
//     userData.append("password", password);
//     userData.append("role", role);
//     //userData.append("vandorData",vendorData) = userData
//     userData.append("educationalQualification", educationalQualification);
//     userData.append("gender", gender);
//     userData.append("address", address);
//     userData.append("cylinderSize", cylinderSize);
//     userData.append("cylinderCertificationStatus", cylinderCertificationStatus);
//     userData.append("cylinderAge", cylinderAge);
//     userData.append("hoseLineCheck", hoseLineCheck);
//     userData.append("cylinderSafetyCheck", cylinderSafetyCheck);
//     userData.append("lpgSafetyKnowledge", lpgSafetyKnowledge);
//     userData.append(
//       "harzardousAreaClassification",
//       harzardousAreaClassification
//     );

//     // if (!state) {
//     //   Toast.show(" state field can not be empty", Toast.LENGTH_SHORT);
//     // } else if (!city) {
//     //   Toast.show("city field can not be empty", Toast.LENGTH_SHORT);
//     //   return;
//     // } else if (!cylinderWeight) {
//     //   Toast.show("cylinderWeight field can not be empty", Toast.LENGTH_SHORT);
//     //   return;
//     // }
//     //API_Public.post("register", JSON.stringify(dataToSend))
//     axios({
//       method: "POST",
//       url: `${baseUrl}users/register`,
//       data: JSON.stringify(dataToSend),
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//       .then((responseJson) => {
//         if (responseJson.status === 200) {
//           // const accessToken = responseJson.data;
//           // save("secureToken", accessToken);
//           // let userdata = {
//           //   email: userEmail,
//           //   fullname: firstName + " " + lastName,
//           //   phone: userPhone,
//           //   address: userAddress,
//           //   // pin: userPin,
//           //   userToken: accessToken,
//           // };
//           // let lastUserName = {
//           //   email: userEmail,
//           //   fullname: firstName + " " + lastName,
//           // };
//           // dispatch(getUseData(userdata));
//           // dispatch(getLastUser(lastUserName));

//           navigation.navigate("SignIn");
//         }
//       })
//       .catch((error) => {
//         Toast.show(error.message, Toast.LENGTH_SHORT);
//       });
//   };

//   useFocusEffect(
//     useCallback(() => {
//       AsyncStorage.getItem("vendorString")
//         .then((userDetails) => {
//           if (userDetails) {
//             const user = JSON.parse(userDetails);
//             // console.log("Retrieved object:", user);
//             setImage(user.image);
//             setName(user.name);
//             setEmail(user.email);
//             setPhoneNumber(user.phoneNumber);
//             setPassword(user.password);
//             setRole(user.role);
//           } else {
//             console.log("Object not found in AsyncStorage");
//           }
//         })
//         .catch((error) => {
//           console.error("Error retrieving object:", error);
//         });
//       return () => {
//         setName();
//         setEmail();
//         setPhoneNumber();
//         setPassword();
//         setRole();
//         setImage();
//       };
//     }, [context.stateUser.isAuthenticated])
//   );
//   return (
//     <SafeAreaView style={styles.subContain}>
//       <View style={{ marginTop: 25 }}>
//         <View style={{ alignSelf: "center" }}>
//           <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
//             Buyer Info
//           </Text>
//         </View>
//         <KeyboardAwareScrollView extraHeight={30} style={{ marginTop: 5 }}>
//           <Input
//             placeholder="Educational qualification"
//             onChangeText={(text) => setEducationalQualification(text)}
//             value={educationalQualification}
//           />

//           <Input
//             placeholder="Gender"
//             onChangeText={(text) => setGender(text)}
//             value={gender}
//           />
//           <Input
//             placeholder="address"
//             onChangeText={(text) => setAddress(text)}
//             value={address}
//           />
//           <Input
//             placeholder="cylinderSize"
//             onChangeText={(text) => setCylinderSize(text)}
//             value={cylinderSize}
//           />
//           <View style={styles.dropdown}>
//             <RNPickerSelect
//               onValueChange={handleCylinder}
//               value={cylinderCertificationStatus}
//               items={[
//                 { label: "Yes", value: "yes" },
//                 { label: "No", value: "no" },
//               ]}
//             />
//           </View>

//           <Input
//             placeholder="cylinderAge/expiringDate"
//             onChangeText={(text) => setCylinderAge(text)}
//             value={cylinderAge}
//           />
//           <View style={styles.dropdown}>
//             <RNPickerSelect
//               onValueChange={handleLiner}
//               value={hoseLineCheck}
//               items={[
//                 { label: "Yes", value: "yes" },
//                 { label: "No", value: "no" },
//               ]}
//             />
//           </View>

//           <View style={styles.dropdown}>
//             <RNPickerSelect
//               onValueChange={handleSafe}
//               value={cylinderSafetyCheck}
//               items={[
//                 { label: "Yes", value: "yes" },
//                 { label: "No", value: "no" },
//               ]}
//             />
//           </View>

//           <View style={styles.dropdown}>
//             <RNPickerSelect
//               onValueChange={handleLpg}
//               value={lpgSafetyknowledge}
//               items={[
//                 { label: "Yes", value: "yes" },
//                 { label: "No", value: "no" },
//               ]}
//             />
//           </View>

//           <View style={styles.dropdown}>
//             <RNPickerSelect
//               onValueChange={handleSafe}
//               value={lpgSafetyKnowledge}
//               items={[
//                 { label: "Yes", value: "yes" },
//                 { label: "No", value: "no" },
//               ]}
//             />
//           </View>
//           <View style={styles.dropdown}>
//             <RNPickerSelect
//               onValueChange={handleHac}
//               value={hazardousAreaClassification}
//               items={[
//                 { label: "Yes", value: "yes" },
//                 { label: "No", value: "no" },
//               ]}
//             />
//           </View>

//           <View style={styles.btnm}>
//             <TouchableOpacity
//               onPress={() => handleSubmitPress()}
//               style={styles.mdbtn}
//             >
//               <Text style={styles.textsm}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </KeyboardAwareScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default BuyerSignUp;
