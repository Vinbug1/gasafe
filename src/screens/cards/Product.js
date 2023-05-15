import { View,TouchableOpacity,ScrollView} from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import ProductCard from "./ProductCard";


const Product = (props) => {
    const navigation = useNavigation();
    const { products } = props;
  return (
    <ScrollView
    contentContainerStyle={{ padding: 8 }}
    vertical 
    showsVerticalScrollIndicator={false}
  >
    {products.map((item, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item: products[index]})}>
          <ProductCard {...item} />
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
  )
}

export default Product