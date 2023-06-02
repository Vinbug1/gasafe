import { SafeAreaView,View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import styles from '../../shared/MainStyle'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation} from "@react-navigation/native";

const HistoryDetails = ({route}) => {

  const { item} = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'#2ED1C0',flex:1}}>
        <View style={[styles.header,styles.shadowProp]}>
          <TouchableOpacity style={{left:8,top:5}} onPress={() => navigation.goBack()}>
                  <AntDesign name="leftcircleo" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignSelf:'center',marginLeft:120}}>
             <Text style={styles.headtx}>TransactionHistoryDetails</Text>
          </View>
      </View>
      <View style={styles.histdet}>
       <View style={[styles.imgdetail,styles.shadowProp]}>
            <Image source={{ uri: item.image }} resizeMode="center" style={styles.detimg}/>
        </View>
        <View style={[styles.imgde,styles.shadowProp]}>
          <View style={styles.cart}>
            <Text style={styles.tit}>Name:</Text>
            <Text style={styles.tit}>{item.name}</Text>
          </View>
          <View style={styles.cart}>
             <Text style={styles.tit}>Description:</Text>
             <Text style={styles.tit}>{item.description}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.tit}>Vendor's Name:</Text>
            <Text style={styles.tit}>{item.vendorsName}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.tit}>Vendor's Phone:</Text>
            <Text style={styles.tit}>{item.vendorsPhone}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.tit}>Client's Name:</Text>
            <Text style={styles.tit}>{item.clientsName}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.tit}>Client's Address:</Text>
            <Text style={styles.tit}>{item.clientsAddress}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.tit}>Client'sPhone:</Text>
            <Text style={styles.tit}>{item.clientsPhone}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.tit}>Purchase Date:</Text>
            <Text style={styles.tit}>{item.date}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.tit}>Discount:</Text>
            <Text style={styles.tit}>{item.discount}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.tit}>Status:</Text>
            <Text style={styles.tit}>{item.status}</Text>
          </View>
          <View style={styles.cart}>
            <Text style={styles.price}>Price</Text>
            <Text style={styles.price}>₦{item.price}</Text>
          </View>
        </View>
        <View style={styles.cart}>
            <TouchableOpacity style={styles.btnmsm} >
                  <Text style={styles.textssm}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnmsm} >
                  <Text style={styles.textssm}>Share</Text>
            </TouchableOpacity>
          </View>

      </View>
      
    </SafeAreaView>
  )
}

export default HistoryDetails   