import { View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import OrderCard from "./OrderCard";

const OrderList = (props) => {
  const navigation = useNavigation();
  const { orders } = props;
  return (
    <ScrollView
      contentContainerStyle={{ padding: 8 }}
      vertical
      showsVerticalScrollIndicator={false}
    >
      {orders.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("OrderDetails", { item: orders[index] })
            }
          >
            <OrderCard {...item} />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default OrderList;
