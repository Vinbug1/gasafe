import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from "../../shared/MainStyle"

const TopVen = (props) => {
    const { image,name,phone } = props;
  return (
    <View style={[styles.catcontain,styles.shadowProp]}>
      <View style={{flexDirection:'row',justifyContent:"space-around"}}>
        <View style={[styles.imgpad,styles.shadowProp]}>
            <Image source={{ uri:image }} resizeMode="center" style={styles.catimg}/>
        </View>
      <View style={{margin:25}}>
        <Text style={styles.txtbrd}>{name}</Text>
        <Text style={styles.txtbrd}>{phone}</Text>
      </View>

      </View>
  </View>
  )
}

export default TopVen