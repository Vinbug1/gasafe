import { Text, View,SafeAreaView,TouchableOpacity } from "react-native";
import React, { useState, useCallback, useContext } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import axios from "axios";
import baseUrl from "../../../assets/common/baseUrl";
import styles from "../../shared/MainStyle";
import mime from "mime";
import AuthGlobal from "../../../Context/store/AuthGlobal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cmks from "../../shared/dropdown/Cmk";
import ers from "../../shared/dropdown/Ers";
import fcs from "../../shared/dropdown/Fc";
import ras from "../../shared/dropdown/Raas";
import hsps from "../../shared/dropdown/Hsp";
import hzcs from "../../shared/dropdown/Hzc";
import lds from "../../shared/dropdown/Lds";
import lpghk from "../../shared/dropdown/Lpghk";
import lpghp from "../../shared/dropdown/Lpghp";
import rcf from "../../shared/dropdown/Rcf";
import st from "../../shared/dropdown/St";
import { Dropdown } from "react-native-element-dropdown";


const VendorSignUp = () => {
  const navigation = useNavigation();
  //const scrollViewRef = useRef(null);
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
  const [emergencyResponseStatus, setEmergencyResponseStatus] = useState();
  const [staffTraing, setStaffTraining] = useState();
  const [riskAssessmentAwarenessStatus, setRiskAssessmentAwarenessStatus] =
    useState();
  const [riskControlFramework, setRiskControlFramework] = useState();
  const [hsePolicy, setHSEPolicy] = useState();
  const [lPGHazardsKnowledge, setLPGHazardsKnowledge] = useState();
  const [lPGHandlingProcedure, setLPGHandlingProcedure] = useState();
  const [cylinderManagementKnowledge, setCylinderManagementKnowledge] =
    useState();
  const [hazardousAreaClassification, setHazardousAreaClassification] =
    useState();
  
  const renderCmk= (cmks) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{cmks.name}</Text>
        {cmks.name === cmks.name}
      </View>
    );
  };
  const renderErs = (ers) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{ers.name}</Text>
        {ers.name === ers.name}
      </View>
    );
  };
  const renderFc = (fcs) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{fcs.name}</Text>
        {fcs.name === fcs.name}
      </View>
    );
  };
  const renderHsp = (hsps) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{hsps.name}</Text>
        {hsps.name === hsps.name}
      </View>
    );
  };
  const renderHzc = (hzcs) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{hzcs.name}</Text>
        {hzcs.name === hzcs.name}
      </View>
    );
  };

  const renderLds = (lds) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{lds.name}</Text>
        {lds.name === lds.name}
      </View>
    );
  };
  const renderLpghk = (lpghk) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{lpghk.name}</Text>
        {lpghk.name === lpghk.name}
      </View>
    );
  };
  const renderLpghp = (lpghp) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{lpghp.name}</Text>
        {lpghp.name === lpghp.name}
      </View>
    );
  };
  const renderRcf = (rcf) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{rcf.name}</Text>
        {rcf.name === rcf.name}
      </View>
    );
  };
 
  const renderSt = (st) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{st.name}</Text>
        {st.name === st.name}
      </View>
    );
  };
  const renderRaas = (ras) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{ras.name}</Text>
        {ras.name === ras.name}
      </View>
    );
  };

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
    userData.append("emergencyResponseStatus", emergencyResponseStatus);
    userData.append("staffTraing", staffTraing);
    userData.append(
      "riskAssessmentAwarenessStatus",
      riskAssessmentAwarenessStatus
    );
    userData.append("riskControlFramework", riskControlFramework);
    userData.append("hsePolicy", hsePolicy);
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
      
      <View style={{ marginTop: 35 }}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cmks}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Selected role"
          searchPlaceholder="Search..."
          value={cylinderManagementKnowledge}
          onChange={(cmks) => {
            setCylinderManagementKnowledge(cmks.name);
          }}
          renderItem={renderCmk}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={fcs}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Selected facility Certificate"
          searchPlaceholder="Search..."
          value={facilityCertificationStatus}
          onChange={(fcs) => {
            setFacilityCertificationStatus(fcs.name);
          }}
          renderItem={renderFc}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={lds}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Selected leak detecting"
          searchPlaceholder="Search..."
          value={leakDetectionSystem}
          onChange={(lds) => {
            setLeakDetectionSystem(lds.name);
          }}
          renderItem={renderLds}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={ers}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Selected Emergency Response"
          searchPlaceholder="Search..."
          value={emergencyResponseStatus}
          onChange={(ers) => {
            setEmergencyResponseStatus(ers.name);
          }}
          renderItem={renderErs}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={st}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Are your staff trained "
          searchPlaceholder="Search..."
          value={staffTraing}
          onChange={(st) => {
            setStaffTraining(st.name);
          }}
          renderItem={renderSt}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={rcf}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Risk control Framework"
          searchPlaceholder="Search..."
          value={riskControlFramework}
          onChange={(rcf) => {
            setRiskControlFramework(rcf.name);
          }}
          renderItem={renderRcf}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={ras}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Risk Asse"
          searchPlaceholder="Search..."
          value={riskAssessmentAwarenessStatus}
          onChange={(ras) => {
            setRiskAssessmentAwarenessStatus(ras.name);
          }}
          renderItem={renderRaas}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={hsps}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder=" Do you have Hse policy"
          searchPlaceholder="Search..."
          value={hsePolicy}
          onChange={(hsps) => {
            setHSEPolicy(hsps.name);
          }}
          renderItem={renderHsp}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={lpghp}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="do you have Lpghp installed"
          searchPlaceholder="Search..."
          value={lPGHandlingProcedure}
          onChange={(lpghp) => {
            setLPGHandlingProcedure(lpghp.name);
          }}
          renderItem={renderLpghp}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={hzcs}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder=" Hazard Area classification"
          searchPlaceholder="Search..."
          value={hazardousAreaClassification}
          onChange={(hzcs) => {
            setHazardousAreaClassification(hzcs.name);
          }}
          renderItem={renderHzc}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={lpghk}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Lpg Hazard Knowledge"
          searchPlaceholder="Search..."
          value={lPGHazardsKnowledge}
          onChange={(lpghk) => {
            setLPGHazardsKnowledge(lpghk.name);
          }}
          renderItem={renderLpghk}
        />

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
