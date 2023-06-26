import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useCallback, useContext } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import axios from "axios";
import baseUrl from "../../../assets/common/baseUrl";
import styles from "../../shared/MainStyle";
import mime from "mime";
import RNPickerSelect from "react-native-picker-select";
import AuthGlobal from "../../../Context/store/AuthGlobal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import qs from "qs";

const VendorSignUp = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const context = useContext(AuthGlobal);
  const [selectedOption, setSelectedOption] = useState("");
  const [selected, setSelected] = useState("");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [image, setImage] = useState();
  const [mainImage, setMainImage] = useState();
  const [businessName, setBusinessName] = useState();
  const [businessPhone, setBusinessPhone] = useState();
  const [businessEmail, setBusinessEmail] = useState();
  const [address, setAddress] = useState();
  const [service, setService] = useState();
  const [serviceCharge, setServiceCharge] = useState();
  const [deliveryCharge, setDeliveryCharge] = useState();
  const [bank, setBank] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [accountName, setAccountName] = useState();
  const [facilityCertificationStatus, setFacilityCertificationStatus] =
    useState();
  const [leakDetectionSystem, setLeakDetectionSystem] = useState();
  const [emergencyresponseStatus, setEmergencyResponseStatus] = useState();
  const [staffTraing, setStaffTraining] = useState();
  const [riskAssessmentAwarenessStatus, setRiskAssessmentAwarenessStatus] =
    useState();
  const [riskControlFramework, setRiskControlFramework] = useState();
  const [hsepolicy, setHSEPolicy] = useState();
  const [lPGHazardsKnowledge, setLPGHazardsKnowledge] = useState();
  const [lPGHandlingProcedure, setLPGHandlingProcedure] = useState();
  const [cylinderManagementKnowledge, setCylinderManagementKnowledge] =
    useState();
  const [hazardousAreaClassification, setHazardousAreaClassification] =
    useState();
  //const [vendorData, setVendorData] = useState();

  // const handleOptionChange = (option) => {
  //      setRole(option)
  //     setSelectedOption(option);
  //     );
  //   };
  const handleFCS = (option) => {
    setFacilityCertificationStatus(option);
    setSelected(option);
    // setShowAdditionalFields(option === "valid");
  };
  const handleLDC = (option) => {
    setLeakDetectionSystem(option);
    setSelected(option);
  };
  const handleERS = (option) => {
    setEmergencyResponseStatus(option);
    setSelected(option);
  };
  const handleST = (option) => {
    setStaffTraining(option);
    setSelected(option);
  };
  const handleRAAS = (option) => {
    setRiskAssessmentAwarenessStatus(option);
    setSelected(option);
  };
  const handleRCF = (option) => {
    setRiskControlFramework(option);
    setSelected(option);
  };
  const handleHsep = (option) => {
    setHSEPolicy(option);
    setSelected(option);
  };
  const handlePGHP = (option) => {
    setLPGHandlingProcedure(option);
    setSelected(option);
  };
  const handleCMK = (option) => {
    setCylinderManagementKnowledge(option);
    setSelected(option);
  };
  const handleHAC = (option) => {
    setHazardousAreaClassification(option);
    setSelected(option);
  };
  const handleLPGHK = (option) => {
    setLPGHazardsKnowledge(option);
    setSelected(option);
  };

  // const scrollToBottom = () => {
  //   scrollViewRef.current.scrollToEnd({ animated: true });
  // };
  const register = () => {
    let userData = new FormData();
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
    userData.append("businessName", businessName);
    userData.append("businessPhone", businessPhone);
    userData.append("businessEmail", businessEmail);
    userData.append("address", address);
    userData.append("service", service);
    userData.append("serviceCharge", serviceCharge);
    userData.append("deliveryCharge", deliveryCharge);
    userData.append("bank", bank);
    userData.append("accountName", accountName);
    userData.append("accountNumber", accountNumber);
    userData.append("facilityCertificationStatus", facilityCertificationStatus);
    userData.append("leakDetectionSystem", leakDetectionSystem);
    userData.append("emergencyresponseStatus", emergencyresponseStatus);
    userData.append("staffTraing", staffTraing);
    userData.append(
      "riskAssessmentAwarenessStatus",
      riskAssessmentAwarenessStatus
    );
    userData.append("riskControlFramework", riskControlFramework);
    userData.append("hsepolicy", hsepolicy);
    userData.append("lPGHazardsKnowledge", lPGHazardsKnowledge);
    userData.append("cylinderManagementKnowledge", cylinderManagementKnowledge);
    userData.append("hazardousAreaClassification", hazardousAreaClassification);

    if (
      email === "" ||
      name === "" ||
      phoneNumber === "" ||
      password === "" ||
      role === ""
    ) {
      setError("Please fill in the form correctly");
    } else {
      axios
        .post(`${baseUrl}users/register`, userData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          // headers: {
          //   "Content-Type": "application/x-www-form-urlencoded",
          // },  
        })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            Toast.show("Vendor created successfully", Toast.LENGTH_SHORT);
            navigation.navigate("SignIn");
          }
        })
        .catch((error) => {
          if (error.response) {
            Toast.show(error.message, Toast.LENGTH_SHORT);
            console.log(error);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser
            Toast.show("No response from the server", Toast.LENGTH_SHORT);
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            Toast.show("Error in request setup", Toast.LENGTH_SHORT);
            console.log("Error", error.message);
          }
        });
    }
  };
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("bankString")
        .then((userDetails) => {
          if (userDetails) {
            const user = JSON.parse(userDetails);

            //console.log("Retrieved object from vendor bank:", user);
            //setVendorData(user);
            setImage(user.image);
            setName(user.name);
            setEmail(user.email);
            setPhoneNumber(user.phoneNumber);
            setPassword(user.password);
            setRole(user.role);
            setBusinessName(user.businessName);
            setBusinessEmail(user.businessEmail);
            setBusinessPhone(user.businessPhone);
            setAddress(user.address);
            setServiceCharge(user.serviceCharge);
            setService(user.service);
            setDeliveryCharge(user.deliveryCharge);
            setBank(user.bank);
            setAccountName(user.accountName);
            setAccountNumber(user.accountNumber);
          } else {
            console.log(" Object not found in AsyncStorage");
          }
        })
        .catch((error) => {
          console.error("Error retrieving object:", error);
        });
      return () => {
        setImage();
        setName();
        setEmail();
        setPhoneNumber();
        setPassword();
        setRole();
        setBusinessName();
        setBusinessEmail();
        setBusinessPhone();
        setAddress();
        setServiceCharge();
        setService();
        setDeliveryCharge();
        setBank();
        setAccountName();
        setAccountNumber();
      };
    }, [context.stateUser.isAuthenticated])
  );

  return (
    <SafeAreaView style={styles.subContain}>
      {/* <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        //onContentSizeChange={() => scrollToBottom()}
      > */}
      <View style={{ marginTop: 35 }}>
        <View style={styles.dropdown}>
          <RNPickerSelect
            placeholder={{ label: "Facility Certificate" }}
            onValueChange={handleFCS}
            value={facilityCertificationStatus}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            placeholder={{ label: "Leak detection system" }}
            onValueChange={handleLDC}
            value={leakDetectionSystem}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleERS}
            placeholder={{ label: "Emergency response status" }}
            value={emergencyresponseStatus}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleST}
            placeholder={{ label: "Staff training" }}
            value={staffTraing}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleRAAS}
            placeholder={{ label: "Risk Assessement" }}
            value={riskAssessmentAwarenessStatus}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleRCF}
            placeholder={{ label: "Risk Control Framework" }}
            value={riskControlFramework}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleHsep}
            placeholder={{ label: "Hse policy" }}
            value={hsepolicy}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handlePGHP}
            placeholder={{ label: "Lpg Handling procedure" }}
            value={lPGHandlingProcedure}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleCMK}
            placeholder={{ label: "Cylinder Management Knowledge" }}
            value={cylinderManagementKnowledge}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleHAC}
            placeholder={{ label: "Hazard Controle" }}
            value={hazardousAreaClassification}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>
        <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleLPGHK}
            placeholder={{ label: "Lpg hazards Knowledge" }}
            value={lPGHazardsKnowledge}
            items={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        </View>

        <View style={styles.btnm}>
          <TouchableOpacity
            // onPress={() => navigation.navigate("VendorSignUp")}
            onPress={() => register()}
            style={styles.mdbtn}
          >
            <Text style={styles.textsm}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </KeyboardAwareScrollView> */}
      {/* </ScrollView> */}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default VendorSignUp;
