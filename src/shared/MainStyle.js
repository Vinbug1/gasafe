import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
  contain:{
    backgroundColor:"",
    marginTop:Platform.OS === 'ios' ? 0 : 45
  },
  subContain:{
    //flex:1,
    height: '100%',
    backgroundColor:"#2ED1C0",
    marginTop:Platform.OS === 'ios' ? 20 : 45
  },
  header:{
    flexDirection:'row',
    backgroundColor:'#ffff',
    height:Platform.OS === 'ios' ? 50 : 65
  },
      btn: {
        height: 48,
        width: "49%",
        alignSelf: "center",
        backgroundColor: "#D12E3F",
        borderTopRightRadius: 95,
        borderBottomRightRadius: 6,
      },
      btnsm: {
        height:50,
        width:80,
        position:'relative',
        left:280,
        top:180,
        backgroundColor:"#D12E3F",
        borderRadius:5
      },
      btnm: {
        height:50,
        width:80,
        alignSelf:'center',
        backgroundColor:"#D12E3F",
        borderRadius:5,
        marginTop:35
      },
      swapimg:{
        height:"80%",
        width:"85%",
        alignSelf:'center',
        marginTop:45,
        resizeMode:'contain',
        borderBottomLeftRadius:186,
        borderBottomRightRadius:186
      },
      swapimg1:{
        height:"100%",
        width:"100%", 
        resizeMode: 'cover', 
         borderBottomLeftRadius:186,
        borderBottomRightRadius:186
      },
      swpimg:{
        height:"93%",
        width:"86%",
        alignSelf:'center',
        //marginTop:35,
        resizeMode:'contain'
      },
      swapvw:{
        backgroundColor:"#fff",
        height:"58%",
        borderBottomLeftRadius:186,
        borderBottomRightRadius:186
      },
      skipvw:{
          position:'absolute',
          left:330,
           top:80,
      },
      textsm:{
         color:'#fff',
         alignSelf:'center',
         paddingTop:15,
         fontWeight:'bold',
         fontSize:16
      },

       wrapper: {
               backgroundColor: 'white',
            //padding: 8,
            //borderRadius: 100,
            //border: 2px solid black;
            color: 'red',
      
       },
      signvw:{
        height:"250%",
        marginTop: 105, 
        backgroundColor:"#2ED1C0",
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
      },
      sigvw:{
        height:"250%",
        marginTop: 50, 
        backgroundColor:"#2ED1C0",
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
      },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    textt: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
      alignSelf:"center",
      padding:14
    },
    dropdown: {
      width: '85%',
      height: 50,
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 5,
      padding: 15,
      alignSelf:'center'
    },
    dropvw: {
      width: '80%',
      height: 48,
      backgroundColor: 'white',
      //margin: 5,
      borderRadius: 2,
      //padding: 5,
      alignSelf:'center',
      flexDirection:'row'
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    item: {
      padding: 17,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    umg: {
      borderWidth: 1,
      borderColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: 105,
      position: "absolute",
      top: "5%",
      right: Platform.OS === "android" ? -35 : -28,
      height: 105,
      borderRadius: 4,
    },
    topview: {
      backgroundColor: "#d6d6d2",
      height: "96%",
      width: "63%",
      //borderColor: "#d6d6d2",
    },
    imbtn: {
      height: 48,
      width: "20%",
      // alignSelf: "center",
      backgroundColor: "#D12E3F",
      borderRadius: 2,
      marginTop:2
    },
    root: {padding: 2, minHeight: 300},
    title: {textAlign: 'center', fontSize: 30,fontWeight:'bold',paddingTop:15},
    subtitle: {textAlign: 'center', fontSize: 14,paddingLeft:12},
    codeFieldRoot: {
      marginTop: 20,
      width: 280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cellRoot: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    cellText: {
      color: '#000',
      fontSize: 36,
      textAlign: 'center',
    },
    focusCell: {
      borderBottomColor: '#007AFF',
      borderBottomWidth: 2,
    },
    skiptxt:{
        fontSize: 18,
        right:Platform.OS === 'ios' ? 0 : -20
    },
    headtxt:{
      fontSize:25,
      color:'white',
      fontWeight:'bold',
      left: 16
    },
    vwtouch: {
      backgroundColor: "#ffff",
      width: "95%",
      padding: 5,
      height: 160,
      margin:10,
      // marginLeft: 16,
      // marginRight: -36,
      // marginBottom: 16,
      // marginTop: 19,
      borderRadius: 10,
      borderColor: "blue",
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: {
        height: 4,
        width: 2,
      }
    },
    
});
{/* <View>
<View>
   <View
         style={{
           flexDirection: "row",
           justifyContent: "space-around",
           margin: 20,
         }}
       >
         <View>
           
           <View style={{paddingTop: 18}}>
             <Image
               source={{ uri: pickedImagePath }}
               style={styles.umg}
               resizeMode="contain"
             />
           </View>
           <TouchableOpacity
             style={styles.imgbtn}
             onPress={() => toggleModal()}
           >
             <Text style={styles.btnTxt}>Upload</Text>
           </TouchableOpacity>
         </View>
         <View
           style={{
             flexDirection: "column",
             justifyContent: "space-around",
           }}
         >
         

           <View
             style={{
               flexDirection: "row",
               marginLeft: 98,
               marginRight: 10,
               marginTop: 30,
               padding: 5,
             }}
           >
             <View style={styles.topview}>
               <Image
                 source={{ uri: offerLetter }}
                 style={styles.image}
                 resizeMode="cover"
               />
             </View>
             <TouchableOpacity
               style={styles.imbtn}
               onPress={() => toggleModal()}
             >
               <Text style={styles.btnsxt}>AppLetter</Text>
             </TouchableOpacity>
           </View>
         </View>
    </View>
 </View>
</View> */}