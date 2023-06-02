import { View, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import HistoryCard from './HistoryCard';

const TransactionHistory = (props) => {
    const navigation = useNavigation();
    const { histories} = props;
  return (
    <ScrollView>
        {histories.map((item,index) => (
            <View key={index}>
                <TouchableOpacity onPress={() => navigation.navigate("HistoryDetails",{item:histories[index]})}>
                    <HistoryCard  {...item} />
                </TouchableOpacity>
            </View>
        ))}
      {/* <Text>TransactionHistories</Text> */}
    </ScrollView>
  )
}

export default TransactionHistory