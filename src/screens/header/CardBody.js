import { SafeAreaView, Text, TouchableOpacity, View,Image } from 'react-native'
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons,Fontisto,FontAwesome5 } from "@expo/vector-icons";
import styles from "../../shared/MainStyle";

const CardBody = () => {
    const navigation = useNavigation();
  
  return (

    <SafeAreaView style={{}}>
        <>
            <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
                <TouchableOpacity onPress={()=> navigation.navigate("FilGasScreen")} style={[styles.filgs,styles.shadowProp]} >
                    <View>
                         <Ionicons name="flame" size={35} color="black" style={{alignSelf:"center"}} />
                        <Text style={styles.titxt}>Fill Gas</Text>
                    </View>
              </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("MarketScreen")} style={[styles.mktplc,styles.shadowProp]} >
                    <View>
                     <Fontisto name="shopping-store" size={35} color="black"  style={{alignSelf:"center"}} />
                        <Text style={styles.titxt}>Market Place</Text>
                    </View>
                
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
                <TouchableOpacity onPress={()=> navigation.navigate("TopVendorScreen")} style={[styles.toh,styles.shadowProp]} >
                    <View>
                    <FontAwesome5 name="user-friends" size={35} color="black"   style={{alignSelf:"center"}}/>
                        <Text style={styles.titxt}>Top Vendors</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=> navigation.navigate("DailyTipScreen")} style={[styles.dlvw,styles.shadowProp]} >
                        <View>
                        <Image  source={require('../../../assets/images/optImg/tips.png')} style={{alignSelf:"center"}}/>
                            <Text style={styles.titxt}>Daily Tips</Text>
                        </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
                <TouchableOpacity onPress={()=> navigation.navigate("GctScreen")} style={[styles.gctvw,styles.shadowProp]} >
                    <View>
                       <Image  source={require('../../../assets/images/optImg/comp.png')} style={{alignSelf:"center"}}/>
                        <Text style={styles.titxt}>GCT</Text>
                       
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("TransHistScreen")} style={[styles.tranvw,styles.shadowProp]} >
                    <View>
                    <Image  source={require('../../../assets/images/optImg/hnady.png')} style={{alignSelf:"center"}}/>
                        <Text style={styles.titxt}>Transactions</Text>
                    
                    </View>
                </TouchableOpacity>
            </View>
        </>
    </SafeAreaView>

  )
}

export default CardBody