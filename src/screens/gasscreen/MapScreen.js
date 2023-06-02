import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
// import { getUseData, getLastUser } from "../Redux/features/userSlice";
// import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
// import baseUrl from "../Redux/common/baseUrl";
 import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import { AntDesign,Entypo,Feather,FontAwesome5,MaterialCommunityIcons    } from '@expo/vector-icons'; 
import { Text,View,SafeAreaView,TouchableOpacity,Image} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Modal from "react-native-modal";


const MapScreen = (props) => {
  const navigation = useNavigation();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [amount, setAmount] = useState();
  const [purpose, setPurpose] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();

  // const [item, setItem] = useState(props.route.params.item);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const visibletoggleModal = () => {
    setIsGroup(!isModalVisible);
  };
  const offtoggleModal = () => {
    setModalVisible(false);
  };
  const backofftoggleModal = () => {
    setIsGroup(false);
  };
        
    const [mapRegion, setmapRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  
    async function save(key, value) {
      await SecureStore.setItemAsync(key, value);
    }
  
    const handleSubmitPress = () => {
      if (!cylinderWeight) {
        Toast.show(" businessName field can not be empty", Toast.LENGTH_SHORT);
      } else if (!numberOfCylinder) {
        Toast.show("businessPhone field can not be empty", Toast.LENGTH_SHORT);
        return;      
      }else {
        let dataToSend = {
          newpassword: cylinderWeight,
          confirmpassword: numberOfCylinder,
        };
  
        //API_Public.post("register", JSON.stringify(dataToSend))
        axios({
          method: "POST",
          url: `${baseUrl}users/register`,
          data: JSON.stringify(dataToSend),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((responseJson) => {
            if (responseJson.status === 200) {
              const accessToken = responseJson.data;
              save("secureToken", accessToken); 
              navigation.navigate("MainScreen");
            }
          })
          .catch((error) => {
            Toast.show(error.message, Toast.LENGTH_SHORT);
          });
      }
    };
  return (
    <SafeAreaView style={{backgroundColor:"#2ED1C0",flex:1}}>
    <View>
        <TouchableOpacity style={{left:5}} onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircleo" size={28} color="#FFFFFF" />
        </TouchableOpacity>
    </View>
     <View>
        <KeyboardAwareScrollView extraHeight={20} style={{marginTop:5}}> 
        <View style={styles.topmap}>
            <Entypo name="location-pin" size={23} color="black"  style={{paddingTop:12,paddingLeft:25}}/>
            <Input placeholder="address" onChangeText={(text) => setAddress(text)} value={address}/>
            <Feather  name="edit-2" size={22} color="black"  style={{paddingTop:12,paddingRight:25}}/>
          </View>           
          <View style={styles.topmap}>
             <Feather  name="phone" size={21} color="black"  style={{paddingTop:12,paddingLeft:20,margin:5}}/>
              <Input placeholder="phone" onChangeText={(text) => setPhone(text)} value={phone}/>
             <Feather  name="edit-2" size={22} color="black"  style={{paddingTop:12,paddingRight:25}}/>
          </View>           
        </KeyboardAwareScrollView>
     </View>
        <View style={styles.mapContain}>
            <MapView  style={{ alignSelf: 'stretch', height: '100%' }} region={mapRegion}>
              <Marker coordinate={mapRegion} title='Vincent' />
            </MapView>
        </View>
        <View style={{backgroundColor:"#FFFFFF",height:"100%"}}>
           <Text style={{alignSelf:"center",padding:5}}>Track your delievery</Text>
           <Text style={{padding:6}}>Rider arrives in 15min</Text> 
           {/* DOn't forget to add the actual time  */}
           <TouchableOpacity style={styles.mapbott} onPress={() => toggleModal()}>
            <Feather name="phone" size={20} color="black"  style={{padding:8}}/>
            <Text style={{paddingTop:15}}>Call rider</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.mapbott} onPress={() => visibletoggleModal()}>
            <FontAwesome5 name="user-circle" size={20} color="black"  style={{padding:8}}/>
               <Text style={{paddingTop:15}}>Riders profile</Text>       
           </TouchableOpacity> 
          <TouchableOpacity style={styles.mapbott}>
            <MaterialCommunityIcons  name="shield-star-outline" size={23} color="black"  style={{padding:8}}/>
            <Text style={{paddingTop:15}}>Safety Tips</Text>
          </TouchableOpacity> 
        </View>
        {!isGroup ? (
        <Modal isVisible={isModalVisible}>
          <SafeAreaView
            style={{
              height: "15%",
              //Platform.OS === "ios" ? "25%" : "28%",
              width: "80%",
              backgroundColor: "white",
              alignSelf: "center",
              borderRadius: 5,
            }}
            // style={{ flex: 1, backgroundColor: "#f5ede4", marginTop: 50 }}
          >
            <View>
              <TouchableOpacity onPress={() => offtoggleModal()}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
              <View style={{ alignSelf:'center' }}>
                  <TouchableOpacity style={styles.mapbott} onPress={() => toggleModal()}>
                      <Feather name="phone" size={25} color="black"  style={{padding:8}}/>
                          <Text style={{paddingTop:15}}>Call Online</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mapbott} onPress={() => toggleModal()}>
                        <Feather name="phone" size={25} color="black"  style={{padding:8}}/>
                        <Text style={{paddingTop:15}}>Call OffLine</Text>
                </TouchableOpacity>  
              </View>
          </SafeAreaView>
        </Modal>
      ) : (
        <Modal isVisible={isGroup}>
          <SafeAreaView
            style={{
              height: "80%",
              width: "100%",
              backgroundColor: "white",
              alignSelf: "center",
              borderRadius: 5,
            }}
          >
        <View style={[styles.header,styles.shadowProp]}>
          <TouchableOpacity style={{left:8,top:5}} onPress={() => backofftoggleModal()}>
                  <AntDesign name="close" size={28} color="#2ED1C0" />
          </TouchableOpacity>
      </View>
      <View style={styles.detailbg}>
       <View style={{flexDirection:'row'}}>
             <Image source={{ uri: image }} resizeMode="cover" style={styles.imagdat}/>  
             <View style={{marginTop:40}}>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{phone}</Text>
                </View>
                <View style={styles.cardet}>
                  <Text style={styles.title}>{address}</Text>
                </View>          
             </View>
       </View>
      </View>
  
          </SafeAreaView>
        </Modal>
      )}
  </SafeAreaView>
  )
}

export default MapScreen