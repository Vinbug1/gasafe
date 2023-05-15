import { SafeAreaView,View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import styles from '../../shared/MainStyle'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation} from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductDetails = ({route}) => {
  const { item} = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'#2ED1C0',flex:1}}>
        <View style={[styles.header,styles.shadowProp]}>
          <TouchableOpacity style={{left:8,top:5}} onPress={() => navigation.goBack()}>
                  <AntDesign name="leftcircleo" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignSelf:'center',marginLeft:120}}>
             <Text style={styles.headtx}>Details</Text>
          </View>
      </View>
      <View style={{backgroundColor:'#FFFFFF',borderTopLeftRadius:20,borderTopRightRadius:20,height:"100%",marginTop:45}}>
       <View style={[styles.imgdetail,styles.shadowProp]}>
            <Image source={{ uri: item.image }} resizeMode="center" style={styles.detimg}/>
        </View>
        <View style={[styles.imgdet,styles.shadowProp]}>
          <View style={styles.cardet}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={styles.cardet}>
             <Text style={styles.title}>Description</Text>
             <Text style={styles.title}>{item.description}</Text>
          </View>
          <View style={styles.cardet}>
            <Text style={styles.title}>Status</Text>
            <Text style={styles.title}>{item.status}</Text>
          </View>
          <View style={styles.cardet}>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.price}>₦{item.price}</Text>
          </View>
           
        </View>
      
        <TouchableOpacity style={styles.btnlge} >
             <MaterialCommunityIcons name="cart" color='#D12E3F' size={22} />
              <Text style={{fontSzie:15,color:'#D12E3' }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default ProductDetails