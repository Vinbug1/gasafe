import { View, Text,Image } from 'react-native'
import React from 'react'
import  styles from  '../../shared/MainStyle'
const HistoryCard = (props) => {
    const { name,price} = props;
  return (
    <View style={[styles.cathist,styles.shadowProp]}>
    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
    <View>
      <Text style={styles.txtbrd}>{name}</Text>
      <Text style={styles.txtbrd}>{name}</Text>
    </View> 
    <View>
      <Text style={styles.txtbrd}>{price}</Text>
      <Text style={styles.txtbrd}>{price}</Text>
    </View>
    </View>
</View>
  )
}

export default HistoryCard