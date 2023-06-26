import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import styles from "../../shared/MainStyle"
import { connect } from "react-redux";
import * as actions from "../../../Redux/actions/cartActions";
import Toast from 'react-native-toast-message';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ProductCard = (props) => {
    const { image,name,price,rating,status } = props;
  return (
    <View style={[styles.catcontain,styles.shadowProp]}>
      <View style={{flexDirection:'row',justifyContent:"space-around"}}>
        <View style={[styles.imgpad,styles.shadowProp]}>
            <Image source={{ uri: image }} resizeMode="center" style={styles.catimg}/>
        </View>
      <View style={{margin:25}}>
        <Text style={styles.txtbrd}>{name.length > 15 ? name.substring(0, 7 - 3) + '...' : name}</Text>
        <Text style={styles.txtbrd}>₦{price}</Text>
        <Text style={styles.txtbrd}>{rating}</Text>
      </View>
      <View style={{position:'absolute',top:-55,left:230}}>
         <Text style={styles.txtbrd}>{status}</Text>
      </View>
      <>
        <TouchableOpacity  style={styles.btnptd} onPress={() => { 
            props.addItemToCart(props.id);
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: `${name} added to Cart`,
              text2: "Go to your cart to complete order"
            });
          }}
          
           >
          <Text style={styles.textptd}>Add</Text>
        </TouchableOpacity>
      </>
      </View>
  </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      addItemToCart: (product) => 
          dispatch(actions.addToCart({quantity: 1, product}))
  }
}

export default connect(null, mapDispatchToProps)(ProductCard)