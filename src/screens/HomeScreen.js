import React, { useState, useContext, useCallback } from "react";
import { SafeAreaView, View, Platform } from "react-native";
import AccountCard from "./header/AccountCard";
import CardBody from "./header/CardBody";
import styles from "../shared/MainStyle";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthGlobal from "../../Context/store/AuthGlobal";

const HomeScreen = () => {
  const context = useContext(AuthGlobal);
  const [userDetails, setUserDetails] = useState();

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("userString")
        .then((userDetails) => {
          if (userDetails) {
            const user = JSON.parse(userDetails);
            setUserDetails(user);
          } else {
            console.log("Object not found in AsyncStorage");
          }
        })
        .catch((error) => {
          console.error("Error retrieving object:", error);
        });

      return () => {
        setUserDetails();
      };
    }, [context.stateUser.isAuthenticated])
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#2ED1C0", height: "100%" }}>
      {/* <View style={styles.header} /> */}
      <View style={{ marginTop: Platform.OS === "ios" ? 15 : 25 }}>
        <AccountCard userDetails={userDetails} />
        <View style={{ backgroundColor: "white", height: "100%" }}>
          <CardBody />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
