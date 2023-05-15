import { SafeAreaView,View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react';
import styles from '../../shared/MainStyle'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation} from "@react-navigation/native";


const VendorDetails = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'#FFFFFF',flex:1}}>
        <View style={[styles.header,styles.shadowProp]}>
          <TouchableOpacity style={{left:8,top:5}} onPress={() => navigation.goBack()}>
                  <AntDesign name="leftcircleo" size={28} color="#2ED1C0" />
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignSelf:'center',marginLeft:120}}>
             <Text style={styles.headt}>Vendor's Details</Text>
          </View>
      </View>
      <View style={styles.detailbg}>
       <View style={{flexDirection:'row'}}>
             <Image source={{ uri: item.image }} resizeMode="cover" style={styles.imagdat}/>  
             <View style={{marginTop:40}}>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{item.phone}</Text>
                </View>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{item.address}</Text>
                </View>          
             </View>
       </View>
          <View style={{backgroundColor:'gainsboro',height:"100%",borderTopLeftRadius:20, borderTopRightRadius:20,}}>
              <View style={[styles.catcont,styles.shadowProp]}>
                    <View style={{flexDirection:'row',justifyContent:"space-around"}}>
                          <View style={[styles.imgpad,styles.shadowProp]}>
                              <Image source={{ uri:item.image }} resizeMode="center" style={styles.catimg}/>
                          </View>
                          <View style={{margin:25}}>
                            <Text style={styles.txtbrd}>{item.name.length > 15 ? item.name.substring(0, 7 - 3) + '...' : item.name}</Text>
                            <Text style={styles.txtbrd}>₦{item.price}</Text>
                            <Text style={styles.txtbrd}>{item.rating}</Text>
                          </View>
                          <View style={{position:'absolute',top:-55,left:230}}>
                            <Text style={styles.txtbrd}>{item.status}</Text>
                          </View>
                    </View>
              </View>
          </View>
      </View>
    </SafeAreaView>
  )
}
export default VendorDetails