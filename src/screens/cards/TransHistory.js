import { View, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import HistoryCard from './HistoryCard';

const TransHistory = (props) => {
    const navigation = useNavigation();
    const { histories } = props;
    return (
        <ScrollView 
        contentContainerStyle={{ padding: 8 }} 
        vertical 
         showsVerticalScrollIndicator={false}>
        {histories.map((item, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => navigation.navigate("HistoryDetails", { item: histories[index]})}>
              <HistoryCard {...item} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    )
}

export default TransHistory