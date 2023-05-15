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
        btnlg: {
        height:50,
        width:"80%",
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
          right: 55,
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
        marginTop: 48, 
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
    root: {
      padding: 2, 
      minHeight: 300
    },
    title: {
      textAlign: 'center', fontSize: 30,fontWeight:'bold',paddingTop:15},
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
    filgs:{
        padding:15, 
        backgroundColor:'#072E07', 
        margin:5, 
        width:"48%",
        height:140,
          borderRadius:5,
         justifyContent:'center', 
         alignItems:"center",
        //  borderWidth:0.25
    },
        mktplc: {
      padding:5, 
         backgroundColor:'#F7A41F',  
        margin:5, 
        width:"48%",
        height:140,
          borderRadius:5,
         justifyContent:'center', 
         alignItems:"center",
        //  borderWidth:0.25
    },
    toh: {
      padding:5, 
         backgroundColor:'#FB88B2', 
        margin:5, 
        width:"48%",
        height:140,
          borderRadius:5,
         justifyContent:'center', 
         alignItems:"center",
        //  borderWidth:0.25
    },
    dlvw: {
      padding:5, 
         backgroundColor:'#5A3136', 
        margin:5, 
        width:"48%",
        height:140,
          borderRadius:5,
         justifyContent:'center', 
         alignItems:"center",
        //  borderWidth:0.25
        },
    gctvw: {
      padding:5,  
         backgroundColor:'#039490', 
        margin:5, 
        width:"48%",
        height:140,
          borderRadius:5,
         justifyContent:'center', 
         alignItems:"center",
        //  borderWidth:0.25
    },
          tranvw: {
      padding:5, 
         backgroundColor:'#B6104A', 
        margin:5, 
        width:"48%",
        height:140,
          borderRadius:5,
         justifyContent:'center', 
         alignItems:"center",
        //  borderWidth:0.25
    },
    titxt:{
      marginTop:2,
      fontSize:16,
      fontWeight:'normal'
    },
    checknm:{
      color:'#ffff',
      fontSize:16,
      fontWeight:'normal',
      marginLeft:45
        },
    checktt:{
      color:'#ffff',
      fontSize:21,
      fontWeight:'bold',
      marginRight:70,
      marginLeft:45
    },
    checktxt:{
      color:'#ffff',
      fontSize:16,
      fontWeight:'normal',
      marginRight:70
    },
    checktx:{
      color:'#ffff',
      fontSize:16,
      fontWeight:'normal',
      marginRight:70
    },
    checkhd:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:15
      
    },
    btnsmd:{
      backgroundColor:'#FFFFFF',
      marginTop:9,
       height:40,
       width:"40%",
       borderRadius:5,
    },
    txtsmd:{
      color:"#2ED1C0",
      fontWeight:"normal",
      fontSize:14,
      alignSelf:'center',
      padding:9
    },
    catimg: {
      // width: width / 2 - 8 - 5,
      // height: width / 2 - 20 - 30,
      position: 'absolute',
        top: -5,
      width: "80%",
      height: 80,
      borderRadius: 5,
      margin: 12,
      alignSelf:'center',
    },
    catcontain: {
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: 135,
      //alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
      padding: 10,
      margin: 5,
    },
    cathist: {
      backgroundColor: "#FFFFFF",
      width: "90%",
      height: 65,
      //alignItems: "center",
      alignSelf: "center",
      borderRadius: 5,
      padding: 10,
      margin: 5,
    },
    imgpad:{
      backgroundColor:"#ffff",
      height: 99,
      width:"50%",
      margin:8,
      borderRadius:6,
      //left:-12
      padding:-50,
      alignSelf: "center",
    },
    imgdetail:{
      backgroundColor:"#ffff",
      height: 230,
      width:"80%",
      margin:15,
      borderRadius:6,
      padding:-50,
      alignSelf: "center",
    },
    detimg: {
      position: 'absolute',
        top: -6,
      width: "80%",
      height: 220,
      borderRadius: 8,
      margin: 12,
      alignSelf:'center',
    },
    shadowProp: {  
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3,  
    }, 
  
    container: {
      width: width / 2 - 20,
      height: 250,
      padding: 5,
      borderRadius: 10,
      marginTop: 16,
      marginBottom: 5,
      marginLeft: 10,
      alignItems: 'center',
      elevation: 4,
      backgroundColor: 'white'
  },
  imag: {
    width: 115,
    height: 115,
    borderRadius: 115 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: 'transparent',
    margin:12
  },
  card: {
      marginBottom: 10,
      height: width / 2 - 10 - 90,
      backgroundColor: 'transparent',
      width: width / 2 - 20 - 10
  },
  title: {
      fontWeight: "bold",
      fontSize: 14,
      textAlign: 'center'
  },
  price: {
      fontSize: 18,
      color: 'orange',
      marginTop: 5,
      textAlign:'flex-start',
      padding:5
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  }, 
  searchvw:{
    backgroundColor: "#FFFFFF",
    height: 50, 
    width:"65%",
    flexDirection:'row',
    alignSelf:'flex-end',
    margin:6,
    borderRadius:3,
    padding:16
  },
  header:{
    flexDirection:'row',
   // width:"100%",
    borderRadius:5,
    padding:5,
    justifyContent: "space-between",
  },
  headtxt:{
    fontSize:16,
    padding:8,
  },
  headtxt:{
    fontSize:16,
    padding:8,
    color:'#2ED1C0',
  },
  headtx:{
    fontSize:20,
    padding:8,
    color:'#FFFFFF',
    alignSelf:'center',
  },
  headt:{
    fontSize:20,
    padding:8,
    fontWeight:'bold',
    color:'#2ED1C0',
  },
  mkt:{
    height: 2, 
    width: "100%", 
    backgroundColor: "#c8c8c8"
  },
  imgdet:{
    backgroundColor:"#ffff",
    height: 150,
    width:"80%",
    marginTop:60,
    borderRadius:6,
    padding:-50,
    alignSelf: "center",
  },
  cardet:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:8
  },
  btnlge: {
    height:45,
    width:"80%",
    alignItem:'center',
    backgroundColor:"#FFFFFF",
    borderColor:"#D12E3F",
    borderWidth:1,
    borderRadius:5,
    margin:42,
    flexDirection:'row',
    paddingLeft:99,
    paddingTop:9,
  },
  imagdat: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: 'transparent',
    margin:12,
   // alignSelf:"center",
  },
 detailbg:{
  backgroundColor:'#FFFFFF',
  borderTopLeftRadius:20,
  borderTopRightRadius:20,
  height:"100%",
  marginTop:15,
 },
 catcont: {
  backgroundColor: "#FFFFFF",
  width: "90%",
  height: 135,
  //alignItems: "center",
  alignSelf: "center",
  borderRadius: 5,
  padding: 10,
  marginTop: 15,
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