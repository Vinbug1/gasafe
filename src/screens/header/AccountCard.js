import {  View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState,} from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styles from '../../shared/MainStyle';
import AuthGlobal from "../../../Context/store/AuthGlobal";


const AccountCard = ({userDetails}) => {
  const [shouldShow, setShouldShow] = useState(true);
  const context = useContext(AuthGlobal);

  const visibility = () => {
    setShouldShow(false);
  };
  const invisible = () => {
    setShouldShow(true);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {context.stateUser.isAuthenticated ? (
        <View style={styles.vwtouch}>
          <View>
            {shouldShow ? (
              <TouchableOpacity onPress={() => visibility()} style={{ alignSelf: 'flex-end' }}>
                <FontAwesome name="eye-slash" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => invisible()} style={{ alignSelf: 'flex-end' }}>
                <FontAwesome name="eye" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
          {shouldShow ? (
            <View>
              <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                <View style={{ paddingLeft: 14 }}>
                  <Text style={styles.pritxt}>User:</Text>
                  <Text style={styles.pritxt}>{userDetails?.name || ""}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginTop: 28, justifyContent: "space-between" }}>
                <View style={{ paddingLeft: 14 }}>
                  <Text style={styles.pritxt}>WalletNumber:</Text>
                  <Text style={styles.pritxt}>XXXXXXXXXXX</Text>
                </View>
                <View style={{ flexDirection: "row", margin: 5, justifyContent: "space-around" }}>
                  <View style={{ padding: 5 }}>
                    <FontAwesome5 name="coins" size={24} color="#edab39" />
                  </View>
                  <View>
                    <Text style={{ paddingTop: 5, fontSize: 16, fontWeight: 'bold' }}>0.00</Text>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <View style={{ flexDirection: "row", marginTop: 15, justifyContent: "space-between" }}>
                <View style={{ paddingLeft: 14 }}>
                  <Text style={styles.pritxt}>User:</Text>
                  <Text style={styles.pritxt}>{userDetails?.name || ""}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginTop: 28, justifyContent: "space-between" }}>
                <View style={{ paddingLeft: 14 }}>
                  <Text style={styles.pritxt}>WalletNumber:</Text>
                  <Text style={styles.pritxt}>{userDetails?.accountNumber || ""}</Text>
                </View>
                <View style={{ flexDirection: "row", padding: 5, justifyContent: "space-around" }}>
                  <View>
                    <FontAwesome5 name="coins" size={24} color="#edab39" />
                  </View>
                  <View>
                    <Text style={{ paddingTop: 5, fontSize: 16, fontWeight: 'bold' }}>0.00</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default AccountCard;



