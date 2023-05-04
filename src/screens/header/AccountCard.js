import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome,FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from '../../shared/MainStyle';

const AccountCard = () => {
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
    ];
  return (
    <View style={{ flexDirection: "row" }}>
    {data.map((item, index) => (
      <View key={index} style={styles.vwtouch}>
        <View>
          {shouldShow ? (
            <TouchableOpacity onPress={() => visibility()} style={{alignSelf:'flex-end'}}>
              <FontAwesome name="eye-slash" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => invisible()}
              style={{alignSelf:'flex-end'}}
            >
              <FontAwesome name="eye" size={24} color="black" />
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
                <View style={{paddingLeft:14}}>
                  <Text style={styles.pritxt}>User:</Text>
                  <Text style={styles.pritxt}>{}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 28,
                  justifyContent: "space-between",
                }}
              >
                <View style={{paddingLeft:14}}>
                  <Text style={styles.pritxt}>WalletNumber:</Text>
                  <Text style={styles.pritxt}>XXXXXXXXXXX</Text>
                </View>
                <View  style={{ flexDirection: "row", margin: 5, justifyContent: "space-around"}}>
                    <View  style={{padding:5 }}>
                      <FontAwesome5 name="coins" size={24} color="#edab39" />
                    </View>
                    <View>
                       <Text style={{paddingTop:5,fontSize:16,fontWeight:'bold'}}>0.00</Text>
                    </View>
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
                <View style={{paddingLeft:14}}>
                  <Text style={styles.pritxt}>User:</Text>
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
                <View style={{paddingLeft:14}}>
                  <Text style={styles.pritxt}>WalletNumber:</Text>
                  <Text style={styles.pritxt}>{item.AccountNumber}</Text>
                </View>
                <View  style={{ flexDirection: "row", padding: 5, justifyContent: "space-around" }}>
                    <View >
                      <FontAwesome5 name="coins" size={24} color="#edab39" />
                    </View>
                    <View>
                       <Text style={{paddingTop:5,fontSize:16,fontWeight:'bold'}}>0.00</Text>
                    </View>
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

export default AccountCard