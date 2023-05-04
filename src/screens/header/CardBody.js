import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../../shared/MainStyle";

const CardBody = () => {
    const navigation = useNavigation();
    const [shouldShow, setShouldShow] = useState(true);
  
    const visibility = () => {
      setShouldShow(false);
    };

    const invisible = () => {
      setShouldShow(true);
    };
  
    const data = [
      {
        id: "123",
        title: "Main Account",
        screen: "Invest",
        price: 300,
        //{ navData },
        // {userInfo.user.totalInvest},
        //buttonName: "Invest",
      },
      {
        id: "456",
        title: "Loan",
        screen: "Loan",
        price: 4000,
        //{ navData },
        //buttonName: "Account",
      },
      {
        id: "789",
        title: "expensis",
        screen: "Portfolio",
        price: 4000,
        //{ navData },
        //buttonName: "Account",
      },
      {
        id: "984",
        title: "Contribution",
        screen: "Portfolio",
        price: 4000,
        //{ navData },
        // buttonName: "Account",
      },
    ];

    useFocusEffect(
        useCallback(() => {
          //   SecureStore.getItemAsync("secureToken").then((result) => {
          //     axios({
          //       method: "GET",
          //       //url: `${baseUrl}investmentplans`,
          //       headers: {
          //         "Content-Type": "application/json",
          //         Authorization: "Bearer " + result,
          //       },
          //     })
          //       .then((res) => {
          //         setIsPrice(res.data);
          //         setTotalInvest(res.data);
          //       })
          //       .catch((error) => {
          //         Toast.show(error.message, Toast.LENGTH_SHORT);
          //       });
          //     return () => {
          //       setInvests([]);
          //     };
          //   });
        }, [])
    );
  return (
    <View style={{ flexDirection: "row" }}>
    {data.map((item, index) => (
      <View key={index} style={styles.vwtouch}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.prtxt}>{item.title}</Text>
          {shouldShow ? (
            <TouchableOpacity onPress={() => visibility()}>
              <FontAwesome name="eye-slash" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={
                () => invisible()
                //setShouldShow(shouldShow)
              }
            >
              <FontAwesome name="eye" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
        <>
          {shouldShow ? (
            <>
              <View
                style={{
                  flexDirection: "row",
                  //padding: 10,
                  marginTop: 10,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.pritxt}>Account Number:</Text>
                  <Text style={styles.pritxt}>XXXXXXXXXXX</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 28,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.pritxt}>Account Balance:</Text>
                  <Text style={styles.pritxt}>XXXXXXXXXXX</Text>
                </View>
                <View>
                  <Text style={styles.pritxt}>Outstanding Loan:</Text>
                  <Text style={styles.pritxt}>XXXXXXXXXXX</Text>
                </View>
              </View>
            </>
          ) : (
            <>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.pritxt}>Account Balance:</Text>
                  <Text style={styles.pritxt}>{item.AccountBalance}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 28,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.pritxt}>Account Number:</Text>
                  <Text style={styles.pritxt}>{item.AccountNumber}</Text>
                </View>
                <View>
                  <Text style={styles.pritxt}>Outstanding Loan:</Text>
                  <Text style={styles.pritxt}>{item.OutstandingLoan}</Text>
                </View>
              </View>
            </>
          )}
        </>
      </View>
    ))}
  </View>
  )
}

export default CardBody