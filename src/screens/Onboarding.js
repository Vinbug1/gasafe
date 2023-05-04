import React from 'react';
import {View,Text,StyleSheet,Dimensions, ScrollView,Image,TouchableOpacity} from 'react-native';
import Swiper from "react-native-swiper/src";
import styles from '../shared/MainStyle'
import { useNavigation } from "@react-navigation/native";
const Onboarding = () => {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();
   return(
   <>
      <View style={{ flex: 1 }}>
        {/* <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        > */}
        <Swiper style={styles.wrapper} showsButtons={true} loop={false} buttonStyle={{backgroundColor:'red'}} >
          <View style={{flex:1,backgroundColor:"#2ED1C0"}}>
            <View style={styles.swapvw}>
              <Image  source={require('../../assets/images/gasafe/gas.jpg')} style={styles.swapimg}/>
             <TouchableOpacity style={styles.skipvw} onPress={() => {}}>
                   <Text style={styles.skiptxt}>Skip</Text>
             </TouchableOpacity>
            </View>
            <View style={{margin:20}}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>You do not need to worry about taking your cylinder to refill, send us.</Text>
            </View>
          </View>
        <View style={{flex:1,backgroundColor:"#2ED1C0"}}>
            <View style={styles.swapvw} >
              <Image source={require('../../assets/images/gasafe/map2.png')} style={styles.swapimg1}/>
             <TouchableOpacity style={styles.skipvw} onPress={() => {}}>
                   <Text style={styles.skiptxt}>Skip</Text>
             </TouchableOpacity>
                 
            </View>
            <View style={{margin:20}}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>We have various dealers all around you, at your service with just a click.</Text>
            </View>
          </View>
          <View style={{flex:1,backgroundColor:"#2ED1C0"}}>
            <View style={styles.swapvw} >
            <Image source={require('../../assets/images/gasafe/gas_delivery.png')} style={styles.swpimg}/>
            </View>
            <View style={{margin:20}}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>We are reliable, efficient, affordable and render a fast delivery service to your door step . </Text>
            </View>
             <TouchableOpacity style={styles.btnsm} onPress={() => navigation.navigate('SignIn')}>
                   <Text style={styles.textsm}>Next</Text>
             </TouchableOpacity>
          {/* <Image source={require("../../assets/images/iPhonex.png")} style={{height:height,width:width}} resizeMode='contain'/> */}
          </View>
        </Swiper>
        {/* </ScrollView> */}
      </View>
   </>
   )
};
export default Onboarding;
