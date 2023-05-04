import { View, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell } from 'react-native-confirmation-code-field';
import styles from "../../shared/MainStyle";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"; 

const CELL_COUNT = 4;

const Verification = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
  return (
    <SafeAreaView >
         {/* <View>
            <TouchableOpacity style={{left:16,top:45}} onPress={() => navigation.goBack()}>
                  <AntDesign name="leftcircleo" size={28} color="#2ED1C0" />
            </TouchableOpacity>
        </View> */}
        <Image  source={require('../../../assets/images/gasafe/verification.png')} style={{height:"50%",width:"100%", marginTop:15}} resizeMode='contain'/>
       <Text style={styles.title}>Verification</Text>
       <Text style={styles.subtitle}>Kindly send the 4 digit sent to you via email/phone</Text>
      <CodeField ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <View
          // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
          onLayout={getCellOnLayoutHandler(index)}
          key={index}
          style={[styles.cellRoot, isFocused && styles.focusCell]}>
          <Text style={styles.cellText}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )} />
       <View style={{flexDirection:'row',alignSelf:'flex-end', marginTop:15,padding:13}}>
        <Text style={styles.subtitle}>Did not receive?</Text>
        <TouchableOpacity>
              <Text style={{color:'#D12E3F',fontWeight:'bold'}}>
                Resend
                </Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>
  )}

export default Verification