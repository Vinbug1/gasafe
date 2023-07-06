import React, { useState, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import { FontAwesome } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import roles from "../../shared/dropdown/Role";

const SignUp = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [image, setImage] = useState(null);
  const [mainImage, setMainImage] = useState();
  const [error, setError] = useState();

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

  // const handleOptionChange = (option) => {
  //   setRole(option);
  //   setSelectedOption(option);
  // };

  // const scrollToBottom = () => {
  //   scrollViewRef.current.scrollToEnd({ animated: true });
  // };

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
    if (role !== "Vendor") {
      navigation.navigate("BuyerScreen");
    } else {
      navigation.navigate("BankScreen");
    }
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  const renderRole = (roles) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{roles.name}</Text>
        {roles.name === roles.name}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.subContain}>
      <View style={{ alignSelf: "center", marginTop: 75 }}>
        <Text style={{ fontSize: 16, alignSelf: "center", color: "#FFFFFF" }}>
          Hello dear,
        </Text>
        <Text style={styles.signtxt}> Welcome to Gasafe</Text>
      </View>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.imagejv} source={{ uri: mainImage }} />
          <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
            <FontAwesome name="camera" size={24} color="#D12E3F" />
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

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={roles}
          search
          maxHeight={300}
          labelField="name"
          valueField="name"
          placeholder="Selected role"
          searchPlaceholder="Search..."
          value={role}
          onChange={(roles) => {
            setRole(roles.name);
          }}
          renderItem={renderRole}
        />

        {/* <View style={styles.dropdown}>
          <RNPickerSelect
            onValueChange={handleOptionChange}
            value={selectedOption}
            items={[
              { label: "vendor", value: "vendor" },
              { label: "buyer", value: "buyer" },
            ]}
          />
        </View> */}
        <View style={styles.btnm}>
          <TouchableOpacity onPress={register} style={styles.mdbtn}>
            <Text style={styles.textsm}>Processed</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 10, flexDirection: "row" }}
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
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
