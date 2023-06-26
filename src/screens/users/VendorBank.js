import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useCallback, useContext } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import services from "../../shared/dropdown/GasService";
import banks from "../../shared/dropdown/Bank";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthGlobal from "../../../Context/store/AuthGlobal";

const VendorBank = () => {
  const navigation = useNavigation();
  const context = useContext(AuthGlobal);
  const scrollViewRef = useRef(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [image, setImage] = useState();
  //const [mainImage, setMainImage] = useState();
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
  const [vendorData, setVendorData] = useState();

  const renderService = (services) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{services.name}</Text>
        {services.name === services.name}
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

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  const register = () => {
    let bankData = {
      image: image,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      role: role,
      businessName: businessName,
      businessPhone: businessPhone,
      businessEmail: businessEmail,
      address: address,
      service: service,
      serviceCharge: serviceCharge,
      deliveryCharge: deliveryCharge,
      bank: bank,
      accountName: accountName,
      accountNumber: accountNumber,
    };

    AsyncStorage.setItem("bankString", JSON.stringify(bankData));
    if (
      businessName === "" ||
      businessEmail === "" ||
      businessPhone === "" ||
      address === "" ||
      serviceCharge === "" ||
      service === "" ||
      deliveryCharge === "" ||
      bank === "" ||
      accountName === "" ||
      bank === "" ||
      accountName === "" ||
      accountNumber === ""
    ) {
      setError("Please fill in the form correctly");
    } else {
      navigation.navigate("VendorSignUp");
    }
  };
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("vendorData")
        .then((userDetails) => {
          if (userDetails) {
            const user = JSON.parse(userDetails);
            //console.log("Retrieved object:", user);
            setImage(user.image);
            setName(user.name);
            setEmail(user.email);
            setPhoneNumber(user.phoneNumber);
            setPassword(user.password);
            setRole(user.role);
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
      };
    }, [context.stateUser.isAuthenticated])
  );

  return (
    <SafeAreaView style={styles.subContain}>
      {/* <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => scrollToBottom()}
      > */}
        {/* <KeyboardAwareScrollView enableAutomaticScroll={true}> */}
        <View style={{marginTop:45}} >
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
            placeholder="address"
            onChangeText={(text) => setAddress(text)}
            value={address}
          />

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

          <Input
            placeholder="serviceChaerge"
            onChangeText={(text) => setServiceCharge(text)}
            value={serviceCharge}
          />
          <Input
            placeholder="deliveryCharge"
            onChangeText={(text) => setDeliveryCharge(text)}
            value={deliveryCharge}
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
        </View>

        <View style={styles.btnm}>
          <TouchableOpacity
            //onPress={() => navigation.navigate("VendorSignUp")}
            onPress={() => register()}
            style={styles.mdbtn}
          >
            <Text style={styles.textsm}>Processed</Text>
          </TouchableOpacity>
        </View>
        {/* </KeyboardAwareScrollView> */}
      {/* </ScrollView> */}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default VendorBank;
