import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";
//import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
 import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import { AntDesign } from '@expo/vector-icons'; 
import { Text,View,SafeAreaView,TouchableOpacity,Image} from "react-native";
import gasCylinder from "../../shared/dropdown/GasClyinder"


const FilGas = () => {
    const navigation = useNavigation();
    const [cylinderWeight, setCylinderWeight] = useState();
    const [numberOfCylinder, setNumberOfCylinder] = useState();
    const [otherFieldValue, setOtherFieldValue] = useState('');
   
let qtyPrice = otherFieldValue  * numberOfCylinder ;

    let gasData = {
      cylinder: cylinderWeight,
      gasPrice:otherFieldValue,
      qtyPrice:qtyPrice,
      count: numberOfCylinder,
    };

    const renderGas = (gasCylinder) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{gasCylinder.name}</Text>
          {gasCylinder.name === gasCylinder.name}
        </View>
      );
    };  
  
    async function save(key, value) {
      await SecureStore.setItemAsync(key, value);
    }
  
    const handleSubmitPress = () => {
      if (cylinderWeight === "" || otherFieldValue === "" || numberOfCylinder === ""){
        Toast.show(" All fields are rquired", Toast.LENGTH_SHORT);
      }else {
        navigation.navigate("CheckScreen",{gasData: gasData});
        //API_Public.post("register", JSON.stringify(dataToSend))
        // axios({
        //   method: "POST",
        //   url: `${baseUrl}users/register`,
        //   data: JSON.stringify(dataToSend),
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        // }).then((responseJson) => {
        //     if (responseJson.status === 200) {
        //       const accessToken = responseJson.data;
        //       save("secureToken", accessToken); 
        //       navigation.navigate("MainScreen");
        //     }
        //   })
        //   .catch((error) => {
        //     Toast.show(error.message, Toast.LENGTH_SHORT);
        //   });
      }
    };

    const handleDropdownChange = (value) => {
      setCylinderWeight(value);
  
      // Logic to populate other fields based on the selected dropdown value
      switch (value) {
        case '3kg':
          setOtherFieldValue('500');
          break;
        case '5kg':
          setOtherFieldValue('2400');
          break;
        case '6kg':
          setOtherFieldValue('5100');
          break;
        case '10kg':
          setOtherFieldValue('8500');
          break;
        case '12kg':
          setOtherFieldValue('10200');
          break;
        case '12.5kg':
          setOtherFieldValue('10600');
          break;
        case '25kg':
          setOtherFieldValue('21250');
          break;
        case '50kg':
          setOtherFieldValue('42500');
          break;
        default:
          setOtherFieldValue('');
      }
    };
  return (
    <SafeAreaView>
    <View>
        <TouchableOpacity style={{left:8}} onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircleo" size={28} color="#2ED1C0" />
        </TouchableOpacity>
    </View>
    <Image  source={require('../../../assets/images/gasafe/cartoon_cylinder-removebg-preview.png')} style={{height:"9%",width:"100%", marginTop:15}} resizeMode='contain'/>

     <View style={styles.sigvw}>
     <View style={{ alignSelf: "center" }}>
          <Text style={{ padding: 8,marginTop:12, fontSize: 20, fontWeight: "bold", alignSelf: "center",color: '#fff' }}>
            Refilling Gas
          </Text>
    </View>
        <KeyboardAwareScrollView
          extraHeight={30}
          style={{marginTop:25}}
        >
          <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={gasCylinder}
              search
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="select gas cylinder"
              searchPlaceholder="Search..."
              value={cylinderWeight}
              onChange={(gasCylinder) => 
                handleDropdownChange(gasCylinder.name)
              }
              renderItem={renderGas}
            />
                        
         <Input
          placeholder="Cylinder Weight"
          onChangeText={(text) => setOtherFieldValue(text.value)}
          value={otherFieldValue}
          />

          <Input
            placeholder="Number of Cylinder"
            onChangeText={(text) => setNumberOfCylinder(text)}
            value={numberOfCylinder}
          />
        
       
          <View style={styles.btnlg}>
            <TouchableOpacity
              //onPress={() => navigation.navigate("CheckScreen")} 
             onPress={() => handleSubmitPress()} 
             // style={styles.mdbtn}
              >
              <Text style={styles.textsm}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
     </View>
  </SafeAreaView>
  )
}

export default FilGas