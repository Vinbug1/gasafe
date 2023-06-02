import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import styles from "../../shared/MainStyle";

const CartItem =(props)=>{
  const data = props.item.item;
  return (
    <View style={[styles.catcontain,styles.shadowProp]}>
      <View style={{flexDirection:'row',justifyContent:"space-around"}}>
        <View style={[styles.imgpad,styles.shadowProp]}>
            <Image source={{ uri: data.image }} resizeMode="center" style={styles.catimg}/>
        </View>
      <View style={{margin:25}}>
        <Text style={styles.txtbrd}>{data.name.length > 15 ? data.name.substring(0, 7 - 3) + '...' : data.name}</Text>
        <Text style={styles.txtbrd}>₦{data.price}</Text>
        <Text style={styles.txtbrd}>{data.rating}</Text>
      </View>
      <View style={{position:'absolute',top:-55,left:230}}>
         <Text style={styles.txtbrd}>{data.status}</Text>
      </View>
      {/* <View style={styles.btnptd}>
        <TouchableOpacity  onPress={() => { props.addItemToCart(props.id),Toast.show({topOffset: 60, type: "success", text1: `${name} added to Cart`,text2: "Go to your cart to complete order" }) }}>
                        <Text style={styles.textptd}>Add</Text>
        </TouchableOpacity>
      </View> */}
      </View>
  </View>
  )
}
export default CartItem;