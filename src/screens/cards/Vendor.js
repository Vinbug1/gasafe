import { View,TouchableOpacity,ScrollView,Dimensions} from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import VendorCard from "./VendorCard";
var { width } = Dimensions.get("window");
const Vendor = (props) => {
    const navigation = useNavigation();
    const { item } = props;
  return (
        <TouchableOpacity onPress={() => navigation.navigate("VendorDetails", { item: item })}>
            <View style={{ width: width / 2, backgroundColor: 'white'}} >
                  <VendorCard {...item} />
            </View>
       </TouchableOpacity>
  )
}

export default Vendor