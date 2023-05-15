import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from "../../shared/MainStyle"

const ProductCard = (props) => {
    const { image,name,price,rating,status } = props;
  return (
    <View style={[styles.catcontain,styles.shadowProp]}>
      <View style={{flexDirection:'row',justifyContent:"space-around"}}>
        <View style={[styles.imgpad,styles.shadowProp]}>
            <Image source={{ uri:image }} resizeMode="center" style={styles.catimg}/>
        </View>
      <View style={{margin:25}}>
        <Text style={styles.txtbrd}>{name.length > 15 ? name.substring(0, 7 - 3) + '...' : name}</Text>
        <Text style={styles.txtbrd}>₦{price}</Text>
        <Text style={styles.txtbrd}>{rating}</Text>
      </View>
      <View style={{position:'absolute',top:-55,left:230}}>
         <Text style={styles.txtbrd}>{status}</Text>
      </View>
      </View>
  </View>
  )
}

export default ProductCard