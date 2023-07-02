import { StyleSheet, Dimensions, Platform,PixelRatio } from "react-native";

const { width, height } = Dimensions.get('window');

const responsiveWidth = (widthPercent) => {
  const screenWidth = width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const responsiveHeight = (heightPercent) => {
  const screenHeight = height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

module.exports = StyleSheet.create({
  contain: {
    backgroundColor: "",
    marginTop: Platform.OS === "ios" ? 0 : 45,
  },
  subContain: {
  flex: 1,
   // marginTop: 35,
    height: responsiveHeight("80%"),
    backgroundColor: "#2ED1C0",
    //paddingBottom: 15,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#ffff",
    height: responsiveHeight(Platform.OS === "ios" ? 50 : 65),
  },
  btn: {
    height: responsiveHeight(48),
    width: responsiveWidth("49%"),
    alignSelf: "center",
    backgroundColor: "#D12E3F",
    borderTopRightRadius: 95,
    borderBottomRightRadius: 6,
  },
  btnsm: {
    height: responsiveHeight(50),
    width: responsiveWidth(80),
    position: "relative",
    left: 280,
    top: 180,
    backgroundColor: "#D12E3F",
    borderRadius: 5,
  },
  btnm: {
    height: 50,
    width: 170,
    alignSelf: "center",
    backgroundColor: "#D12E3F",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15,
  },
  btnlg: {
    height: 50,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#D12E3F",
    borderRadius: 5,
    marginTop: 35,
  },
  swapimg: {
    height: "80%",
    width: "85%",
    alignSelf: "center",
    marginTop: 45,
    resizeMode: "contain",
    borderBottomLeftRadius: 186,
    borderBottomRightRadius: 186,
  },
  swapimg1: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 186,
    borderBottomRightRadius: 186,
  },
  swpimg: {
    height: "93%",
    width: "86%",
    alignSelf: "center",
    //marginTop:35,
    resizeMode: "contain",
  },
  swapvw: {
    backgroundColor: "#fff",
    height: "58%",
    borderBottomLeftRadius: 186,
    borderBottomRightRadius: 186,
  },
  skipvw: {
    position: "absolute",
    right: 55,
    top: 80,
  },
  textsm: {
    color: "#fff",
    alignSelf: "center",
    paddingTop: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
  wrapper: {
    backgroundColor: "white",
    //padding: 8,
    //borderRadius: 100,
    //border: 2px solid black;
    color: "red",
  },
  signvw: {
    height: "250%",
    marginTop: 80,
    backgroundColor: "#2ED1C0",
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  sigvw: {
    height: "100%",
    marginTop: 50,
    backgroundColor: "#2ED1C0",
    //borderTopRightRadius:8,
    // borderTopLeftRadius:8,
  },
  sigw: {
    height: "250%",
    backgroundColor: "#2ED1C0",
    //borderTopRightRadius:8,
    // borderTopLeftRadius:8,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  textt: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 14,
  },
  dropdown: {
    width: "85%",
    height: 50,
    backgroundColor: "white",
    margin: 6,
    borderRadius: 5,
    padding: 5,
    alignSelf: "center",
  },
  dropvw: {
    width: "80%",
    height: 48,
    backgroundColor: "white",
    //margin: 5,
    borderRadius: 2,
    //padding: 5,
    alignSelf: "center",
    flexDirection: "row",
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
    width: "25%",
    // alignSelf: "center",
    backgroundColor: "#D12E3F",
    //borderRadius: ,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 2,
  },
  root: {
    padding: 2,
    minHeight: 300,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 15,
  },
  subtitle: { textAlign: "center", fontSize: 14, paddingLeft: 12 },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
  skiptxt: {
    fontSize: 18,
    right: Platform.OS === "ios" ? 0 : -20,
  },
  headtxt: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    left: 16,
  },
  vwtouch: {
    backgroundColor: "#ffff",
    width: "95%",
    padding: 5,
    height: 160,
    margin: 10,
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
    },
  },
  filgs: {
    padding: 15,
    backgroundColor: "#072E07",
    margin: 5,
    width: "48%",
    height: 148,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    //  borderWidth:0.25
  },
  mktplc: {
    padding: 5,
    backgroundColor: "#F7A41F",
    margin: 5,
    width: "48%",
    height: 148,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    //  borderWidth:0.25
  },
  toh: {
    padding: 5,
    backgroundColor: "#FB88B2",
    margin: 5,
    width: "48%",
    height: 148,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    //  borderWidth:0.25
  },
  dlvw: {
    padding: 5,
    backgroundColor: "#5A3136",
    margin: 5,
    width: "48%",
    height: 148,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    //  borderWidth:0.25
  },
  gctvw: {
    padding: 5,
    backgroundColor: "#039490",
    margin: 5,
    width: "48%",
    height: 148,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    //  borderWidth:0.25
  },
  tranvw: {
    padding: 5,
    backgroundColor: "#B6104A",
    margin: 5,
    width: "48%",
    height: 148,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    //  borderWidth:0.25
  },
  titxt: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  titxtx: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
  },
  checknm: {
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 45,
  },
  checktt: {
    color: "black",
    fontSize: 21,
    fontWeight: "bold",
    marginRight: 70,
    marginLeft: 45,
  },
  checktxt: {
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
    marginRight: 70,
  },
  checktx: {
    color: "black",
    fontSize: 16,
    fontWeight: "normal",
    marginRight: 70,
  },
  checkhd: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  btnsmd: {
    backgroundColor: "#FFFFFF",
    marginTop: 9,
    height: 40,
    width: "40%",
    borderRadius: 5,
  },
  txtsmd: {
    color: "#2ED1C0",
    fontWeight: "normal",
    fontSize: 14,
    alignSelf: "center",
    padding: 9,
  },
  catimg: {
    width: "90%",
    height:118,
    borderRadius: 5,
    alignSelf: "center",
    padding: 9,
  },
  catcontain: {
    backgroundColor: "#2ED1C0",
    width: "100%",
    height: 165,
    //alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  histdet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    marginTop: 5,
  },
  cathist: {
    backgroundColor: "#FFFFFF",
    width: "95%",
    height: 65,
    //alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    //padding: 10,
    marginTop: 13,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
  },
  imgpad: {
    backgroundColor: "#ffff",
    height: 143,
    width: "60%",
    margin: 2,
    borderRadius: 6,
    //left:-12
    padding: -50,
    alignSelf: "center",
  },
  imgdetail: {
    backgroundColor: "#2ED1C0",
    height: 230,
    width: "90%",
    margin: 15,
    borderRadius: 6,
    padding: -50,
    alignSelf: "center",
  },
  detimg: {
    position: "absolute",
    top: -6,
    width: "90%",
    height: 220,
    borderRadius: 8,
    margin: 12,
    alignSelf: "center",
  },
  shadowProp: {
    shadowOffset: { width:Platform.OS === 'ios' ? -4 : -2, height: 5 },
    shadowColor: "#2ED1C0",
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },

  container: {
    width: width / 2 - 20,
    height: 250,
    padding: 5,
    borderRadius: 10,
    borderColor: "#2ED1C0",
    borderWidth: 0.25,
    marginTop: 16,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 4,
    backgroundColor: "white",
  },
  imag: {
    width: 115,
    height: 115,
    borderRadius: 115 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "transparent",
    margin: 12,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 10 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    color: "orange",
    //marginTop: 5,
    textAlign: "right",
    padding: 3,
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "white",
  },
  searchvw: {
    backgroundColor: "#FFFFFF",
    height: 50,
    width: "65%",
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: 6,
    borderRadius: 3,
    padding: 16,
  },
  header: { 
    
    flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,

  },
  headtxt: {
    fontSize: 16,
    padding: 8,
    color: "#2ED1C0",
    fontWeight: "bold",
  },
  headertxt: {
    fontSize: 16,
    padding: 8,
    color: "#2ED1C0",
  },
  headtx: {
    fontSize: 20,
    padding: 8,
    color: "#2ED1C0",
    alignSelf: "center",
  },
  headt: {
    fontSize: 20,
    padding: 8,
    fontWeight: "bold",
    color: "#2ED1C0",
  },
  mkt: {
    height: 2,
    width: "100%",
    backgroundColor: "#c8c8c8",
  },
  imgdet: {
    backgroundColor: "#ffff",
    height: 150,
    width: "80%",
    marginTop: 60,
    borderRadius: 6,
    padding: -50,
    alignSelf: "center",
  },
  imgde: {
    backgroundColor: "#ffff",
    height: 300,
    width: "95%",
    marginTop: 10,
    borderRadius: 4,
    padding: -50,
    alignSelf: "center",
  },
  tit: {
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
  },
  cardet: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  cart: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
  },
  btncart: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
  },
  btnlge: {
    height: 45,
    width: "80%",
    alignItem: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#D12E3F",
    borderWidth: 1,
    borderRadius: 5,
    margin: 30,
    flexDirection: "row",
    paddingLeft: 99,
    paddingTop: 9,
  },
  btnmsm: {
    height: 40,
    width: "45%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#D12E3F",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
  },
  textssm: {
    color: "#D12E3F",
    alignSelf: "center",
    paddingTop: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  textptd: {
    color: "#FFFFFF",
    alignSelf: "center",
    padding: 6,
    fontWeight: "bold",
    fontSize: 12,
  },
  imagdat: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
     borderColor: "#FFFFFF",
    margin: 28,
  },

  detailbg: {
    backgroundColor: "#2ED1C0",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: "100%",
    marginTop: 5,
  },
  catcont: {
    backgroundColor: "#2ED1C0",
    width: "90%",
    height: 170,
    //alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },

  btnptd: {
    height: 45,
    width: "20%",
    alignSelf: "center",
    backgroundColor: "#D12E3F",
    borderRadius: 5,
    top: 45,
    right: 5,
    padding: 8,
    marginBottom:16
  },

  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
    left: 0,
    backgroundColor: "white",
    elevation: 10,
    padding: 8,
  },
  // price: {
  //   fontSize: 18,
  //   margin: 20,
  //   color: "red",
  // },
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    height: 70,
    width: width / 1.2,
  },
  bottomBar: {
    backgroundColor: "white",
    width: width,
    height: 60,
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  item: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    padding: 5,
    margin: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  containers: {
    flexDirection: "row",
    padding: 5,
    width: width,
  },
  image: {
    borderRadius: 50,
    width: width / 6,
    height: 20,
    margin: 2,
  },
  item: {
    flexWrap: "wrap",
    margin: 3,
    width: width / 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    width: "80%",
    marginTop: 10,
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 80,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  imageContain: {
    width: 200,
    height: 200,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
   // justifyContent: "center",
     alignItems: "center",
    // marginVertical: 20,
    borderRadius: 100,
    borderColor: "#E0E0E0",
    elevation: 10,
  },
  pdimageCon: {
    width: "37%",
    height: 110,
    alignSelf: "center",
    //borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    //justifyContent: "center",
    borderRadius: 5,
    borderColor: "#2ED1C0",
    backgroundColor: "#FFFFFF",
   // elevation: 10,
  },
  pdimagePck: {
    position: "absolute",
    right: 5,
    bottom: 5,
    backgroundColor: "#FFFFFF",
    padding: 8,
    borderRadius: 100,
    elevation: 10,
  },
  imagevn: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  // imagePicker: {
  //   position: "absolute",
  //   right: 5,
  //   bottom: 5,
  //   backgroundColor: "grey",
  //   padding: 8,
  //   borderRadius: 100,
  //   elevation: 20,
  // },
  mapContain: {
    height: "56%",
    weidth: "100%",
  },
  topmap: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#FFFFFF",
    height: 50,
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    margin: 6,
  },
  mapbott: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 25,
    //marginBottom:5,
  },
  signtxt: {
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
    left: 15,
  },
  inputtxt: {
    width: "85%",
    height: 50,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    padding: 15,
    alignSelf: "center",
    // borderWidth: 1,
    //borderColor: 'orange'
  },
  filltxt: {
    padding: 8,
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#fff",
  },
  inputtx: {
    width: "85%",
    height: 50,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
    padding: 15,
    alignSelf: "center",
  },
  imageContainer: {
    width: 130,
    height: 130,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 12,
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "#FFFFFF",
    elevation: 10,
    alignSelf: "center",
  },
  label: {
    width: "80%",
    marginTop: 10,
  },
  imagejv: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imagejp: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  imagePicker: {
    position: "absolute",
    right: -25,
    bottom: 5,
    backgroundColor: "grey",
    padding: 8,
    borderRadius: 100,
    elevation: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
    marginTop: Platform.OS === "ios" ? 10 : 25,
    marginBottom: Platform.OS === "ios" ? 5 :9
  },
  fab: {
    top: 405,
    left:"65%", 
     width: 85,
     height:85,
     borderRadius: 120 / 2,
     overflow: "hidden",
     borderWidth: 1,
     borderColor: "#2ED1C0",
     backgroundColor:"#2ED1C0",
    margin: 15,
    shadowOpacity: 5.5,
    shadowRadius: 15,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  aptinput: {
    width: '85%',
    height: 50,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    padding: 15,
    alignSelf:'center'
   // borderWidth: 1,
    //borderColor: 'orange'
},
txtInput:{
  height: 40,
  margin: 12,
  borderWidth: 1,
  borderRadius:5,
  padding: 10,
  borderColor: '#2ED1C0',
  backgroundColor: "#FFFFFF",
},
despInput:{
  height: 60,
  margin: 12,
  borderWidth: 1,
  borderRadius:5,
  padding: 10,
  borderColor: '#2ED1C0',
  backgroundColor: "#FFFFFF",
},
desInput:{
  height: 40,
  width: "35%",
  margin: 12,
  borderWidth: 1,
  borderRadius:5,
  padding: 10,
  borderColor: '#2ED1C0',
  backgroundColor: "#FFFFFF",
}
});

// import { StyleSheet, useWindowDimensions, Platform } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// module.exports = StyleSheet.create({
//   contain: {
//     backgroundColor: "",
//     marginTop: Platform.OS === 'ios' ? 0 : 45
//   },
//   subContain: {
//     height: '100%',
//     backgroundColor: "#2ED1C0",
//     paddingBottom: 15
//   },
//   header: {
//     flexDirection: 'row',
//     backgroundColor: '#ffff',
//     height: Platform.OS === 'ios' ? 50 : 65
//   },
//   btn: {
//     height: 48,
//     width: "49%",
//     alignSelf: "center",
//     backgroundColor: "#D12E3F",
//     borderTopRightRadius: 95,
//     borderBottomRightRadius: 6,
//   },
//   btnsm: {
//     height: 50,
//     width: 80,
//     position: 'relative',
//     left: 280,
//     top: 180,
//     backgroundColor: "#D12E3F",
//     borderRadius: 5
//   },
//   btnm: {
//     height: 50,
//     width: 170,
//     alignSelf: 'center',
//     backgroundColor: "#D12E3F",
//     borderRadius: 5,
//     marginTop: 5,
//     marginBottom: 15
//   },
//   btnlg: {
//     height: 50,
//     width: "80%",
//     alignSelf: 'center',
//     backgroundColor: "#D12E3F",
//     borderRadius: 5,
//     marginTop: 35
//   },
//   swapimg: {
//     height: "80%",
//     width: "85%",
//     alignSelf: 'center',
//     marginTop: 45,
//     resizeMode: 'contain',
//     borderBottomLeftRadius: 186,
//     borderBottomRightRadius: 186
//   },
//   swapimg1: {
//     height: "100%",
//     width: "100%",
//     resizeMode: 'cover',
//     borderBottomLeftRadius: 186,
//     borderBottomRightRadius: 186
//   },
//   swpimg: {
//     height: "93%",
//     width: "86%",
//     alignSelf: 'center',
//     resizeMode: 'contain'
//   },
//   swapvw: {
//     backgroundColor: "#fff",
//     height: "58%",
//     borderBottomLeftRadius: 186,
//     borderBottomRightRadius: 186
//   },
//   skipvw: {
//     position: 'absolute',
//     right: 55,
//     top: 80,
//   },
//   textsm: {
//     color: '#fff',
//     alignSelf: 'center',
//     paddingTop: 15,
//     fontWeight: 'bold',
//     fontSize: 16
//   },
//   wrapper: {
//     backgroundColor: 'white',
//     color: 'red',
//   },
//   signvw: {
//     height: "250%",
//     marginTop: 80,
//     backgroundColor: "#2ED1C0",
//     borderTopRightRadius: 6,
//     borderTopLeftRadius: 6,
//   },
//   sigvw: {
//     height: "100%",
//     marginTop: 50,
//     backgroundColor: "#2ED1C0",
//   },
//   sigw: {
//     height: "250%",
//     backgroundColor: "#2ED1C0",
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
//   textt: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: 'bold',
//     alignSelf: "center",
//     paddingVertical: 5
//   },
//   textinput: {
//     width: '85%',
//     height: 50,
//     alignSelf: "center",
//     marginTop: 15,
//     paddingLeft: 15,
//     borderRadius: 5,
//     backgroundColor: "#fff"
//   },
//   dropdown: {
//     width: '85%',
//     height: 50,
//     alignSelf: "center",
//     marginTop: 15,
//     paddingLeft: 15,
//     borderRadius: 5,
//     backgroundColor: "#fff"
//   },
//   item: {
//     marginLeft: 10
//   },
//   picker: {
//     color: "#8e8e93"
//   },
//   input: {
//     width: '85%',
//     height: 50,
//     alignSelf: "center",
//     marginTop: 10,
//     paddingLeft: 15,
//     borderRadius: 5,
//     backgroundColor: "#fff"
//   },
//   inputIcon: {
//     position: 'absolute',
//     left: 22,
//     top: 12
//   },
//   linearGradient: {
//     height: useWindowDimensions().height,
//     width: useWindowDimensions().width,
//     position: 'absolute',
//     top: 0,
//     left: 0
//   }
// });

// import { StyleSheet, Dimensions, Platform } from 'react-native';

// const { width, height } = Dimensions.get("window");

// module.exports = StyleSheet.create({
//   contain:{
//     backgroundColor:"",
//     marginTop:Platform.OS === 'ios' ? 0 : 45
//   },
//   subContain:{
//     //flex:1,
//     height: '100%',
//     backgroundColor:"#2ED1C0",
//     paddingBottom:15
//   },
//   header:{
//     flexDirection:'row',
//     backgroundColor:'#ffff',
//     height:Platform.OS === 'ios' ? 50 : 65
//   },
//       btn: {
//         height: 48,
//         width: "49%",
//         alignSelf: "center",
//         backgroundColor: "#D12E3F",
//         borderTopRightRadius: 95,
//         borderBottomRightRadius: 6,
//       },
//       btnsm: {
//         height:50,
//         width:80,
//         position:'relative',
//         left:280,
//         top:180,
//         backgroundColor:"#D12E3F",
//         borderRadius:5
//       },
//       btnm: {
//         height:50,
//         width:170,
//         alignSelf:'center',
//         backgroundColor:"#D12E3F",
//         borderRadius:5,
//         marginTop:5,
//         marginBottom:15
//       },
//         btnlg: {
//         height:50,
//         width:"80%",
//         alignSelf:'center',
//         backgroundColor:"#D12E3F",
//         borderRadius:5,
//         marginTop:35
//       },
//       swapimg:{
//         height:"80%",
//         width:"85%",
//         alignSelf:'center',
//         marginTop:45,
//         resizeMode:'contain',
//         borderBottomLeftRadius:186,
//         borderBottomRightRadius:186
//       },
//       swapimg1:{
//         height:"100%",
//         width:"100%",
//         resizeMode: 'cover',
//          borderBottomLeftRadius:186,
//         borderBottomRightRadius:186
//       },
//       swpimg:{
//         height:"93%",
//         width:"86%",
//         alignSelf:'center',
//         //marginTop:35,
//         resizeMode:'contain'
//       },
//       swapvw:{
//         backgroundColor:"#fff",
//         height:"58%",
//         borderBottomLeftRadius:186,
//         borderBottomRightRadius:186
//       },
//       skipvw:{
//           position:'absolute',
//           right: 55,
//            top:80,
//       },
//       textsm:{
//          color:'#fff',
//          alignSelf:'center',
//          paddingTop:15,
//          fontWeight:'bold',
//          fontSize:16
//       },
//        wrapper: {
//                backgroundColor: 'white',
//             //padding: 8,
//             //borderRadius: 100,
//             //border: 2px solid black;
//             color: 'red',

//        },
//       signvw:{
//         height:"250%",
//         marginTop: 80,
//         backgroundColor:"#2ED1C0",
//         borderTopRightRadius:6,
//         borderTopLeftRadius:6,
//       },
//       sigvw:{
//         height:"100%",
//         marginTop: 50,
//         backgroundColor:"#2ED1C0",
//         //borderTopRightRadius:8,
//        // borderTopLeftRadius:8,
//       },
//       sigw:{
//         height:"250%",
//         //marginTop: 80,
//         backgroundColor:"#2ED1C0",
//         //borderTopRightRadius:8,
//        // borderTopLeftRadius:8,
//       },
//     text: {
//       color: '#fff',
//       fontSize: 30,
//       fontWeight: 'bold'
//     },
//     textt: {
//       color: '#fff',
//       fontSize: 15,
//       fontWeight: 'bold',
//       alignSelf:"center",
//       padding:14
//     },
//     dropdown: {
//       width: '85%',
//       height: 50,
//       backgroundColor: 'white',
//       margin: 6,
//       borderRadius: 5,
//       padding: 5,
//       alignSelf:'center'
//     },
//     dropvw: {
//       width: '80%',
//       height: 48,
//       backgroundColor: 'white',
//       //margin: 5,
//       borderRadius: 2,
//       //padding: 5,
//       alignSelf:'center',
//       flexDirection:'row'
//     },
//     placeholderStyle: {
//       fontSize: 16,
//     },
//     selectedTextStyle: {
//       fontSize: 16,
//     },
//     iconStyle: {
//       width: 20,
//       height: 20,
//     },
//     inputSearchStyle: {
//       height: 40,
//       fontSize: 16,
//     },
//     item: {
//       padding: 17,
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     textItem: {
//       flex: 1,
//       fontSize: 16,
//     },
//     umg: {
//       borderWidth: 1,
//       borderColor: "white",
//       alignItems: "center",
//       justifyContent: "center",
//       width: 105,
//       position: "absolute",
//       top: "5%",
//       right: Platform.OS === "android" ? -35 : -28,
//       height: 105,
//       borderRadius: 4,
//     },
//     topview: {
//       backgroundColor: "#d6d6d2",
//       height: "96%",
//       width: "63%",
//       //borderColor: "#d6d6d2",
//     },
//     imbtn: {
//       height: 48,
//       width: "25%",
//       // alignSelf: "center",
//       backgroundColor: "#D12E3F",
//       //borderRadius: ,
//       borderTopRightRadius:5,
//       borderBottomRightRadius:5,
//       marginTop:2
//     },
//     root: {
//       padding: 2,
//       minHeight: 300
//     },
//     title: {
//       textAlign: 'center', fontSize: 30,fontWeight:'bold',paddingTop:15},
//     subtitle: {textAlign: 'center', fontSize: 14,paddingLeft:12},
//     codeFieldRoot: {
//       marginTop: 20,
//       width: 280,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//     cellRoot: {
//       width: 60,
//       height: 60,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderBottomColor: '#ccc',
//       borderBottomWidth: 1,
//     },
//     cellText: {
//       color: '#000',
//       fontSize: 36,
//       textAlign: 'center',
//     },
//     focusCell: {
//       borderBottomColor: '#007AFF',
//       borderBottomWidth: 2,
//     },
//     skiptxt:{
//         fontSize: 18,
//         right:Platform.OS === 'ios' ? 0 : -20
//     },
//     headtxt:{
//       fontSize:25,
//       color:'white',
//       fontWeight:'bold',
//       left: 16
//     },
//     vwtouch: {
//       backgroundColor: "#ffff",
//       width: "95%",
//       padding: 5,
//       height: 160,
//       margin:10,
//       // marginLeft: 16,
//       // marginRight: -36,
//       // marginBottom: 16,
//       // marginTop: 19,
//       borderRadius: 10,
//       borderColor: "blue",
//       shadowOpacity: 0.2,
//       shadowRadius: 3,
//       shadowOffset: {
//         height: 4,
//         width: 2,
//       }
//     },
//     filgs:{
//         padding:15,
//         backgroundColor:'#072E07',
//         margin:5,
//         width:"48%",
//         height:140,
//           borderRadius:5,
//          justifyContent:'center',
//          alignItems:"center",
//         //  borderWidth:0.25
//     },
//         mktplc: {
//       padding:5,
//          backgroundColor:'#F7A41F',
//         margin:5,
//         width:"48%",
//         height:140,
//           borderRadius:5,
//          justifyContent:'center',
//          alignItems:"center",
//         //  borderWidth:0.25
//     },
//     toh: {
//       padding:5,
//          backgroundColor:'#FB88B2',
//         margin:5,
//         width:"48%",
//         height:140,
//           borderRadius:5,
//          justifyContent:'center',
//          alignItems:"center",
//         //  borderWidth:0.25
//     },
//     dlvw: {
//       padding:5,
//          backgroundColor:'#5A3136',
//         margin:5,
//         width:"48%",
//         height:140,
//           borderRadius:5,
//          justifyContent:'center',
//          alignItems:"center",
//         //  borderWidth:0.25
//         },
//     gctvw: {
//       padding:5,
//          backgroundColor:'#039490',
//         margin:5,
//         width:"48%",
//         height:140,
//           borderRadius:5,
//          justifyContent:'center',
//          alignItems:"center",
//         //  borderWidth:0.25
//     },
//   tranvw: {
//       padding:5,
//          backgroundColor:'#B6104A',
//         margin:5,
//         width:"48%",
//         height:140,
//           borderRadius:5,
//          justifyContent:'center',
//          alignItems:"center",
//         //  borderWidth:0.25
//     },
//     titxt:{
//       marginTop:2,
//       fontSize:16,
//       fontWeight:'normal'
//     },
//     checknm:{
//       color:'black',
//       fontSize:16,
//       fontWeight:'normal',
//       marginLeft:45
//         },
//     checktt:{
//       color:'black',
//       fontSize:21,
//       fontWeight:'bold',
//       marginRight:70,
//       marginLeft:45
//     },
//     checktxt:{
//       color:'black',
//       fontSize:16,
//       fontWeight:'normal',
//       marginRight:70
//     },
//     checktx:{
//       color:'black',
//       fontSize:16,
//       fontWeight:'normal',
//       marginRight:70
//     },
//     checkhd:{
//       flexDirection:'row',
//       justifyContent:'space-between',
//       marginBottom:15

//     },
//     btnsmd:{
//       backgroundColor:'#FFFFFF',
//       marginTop:9,
//        height:40,
//        width:"40%",
//        borderRadius:5,
//     },
//     txtsmd:{
//       color:"#2ED1C0",
//       fontWeight:"normal",
//       fontSize:14,
//       alignSelf:'center',
//       padding:9
//     },
//     catimg: {
//       // width: width / 2 - 8 - 5,
//       // height: width / 2 - 20 - 30,
//       position: 'absolute',
//         top: -5,
//       width: "80%",
//       height: 80,
//       borderRadius: 5,
//       margin: 12,
//       alignSelf:'center',
//     },
//     catcontain: {
//       backgroundColor: "#2ED1C0",
//       width: "100%",
//       height: 135,
//       //alignItems: "center",
//       alignSelf: "center",
//       borderRadius: 5,
//       padding: 10,
//       margin: 5,
//     },
//     histdet: {
//       backgroundColor:'#FFFFFF',
//       borderTopLeftRadius:20,
//       borderTopRightRadius:20,
//       height:"100%",
//       marginTop:5
//     },
//     cathist: {
//       backgroundColor: "#FFFFFF",
//       width: "95%",
//       height: 65,
//       //alignItems: "center",
//       alignSelf: "center",
//       borderRadius: 5,
//       //padding: 10,
//       marginTop: 13,
//       marginLeft: 12,
//       marginRight: 12,
//       marginBottom: 12,
//     },
//     imgpad:{
//       backgroundColor:"#ffff",
//       height: 99,
//       width:"50%",
//       margin:8,
//       borderRadius:6,
//       //left:-12
//       padding:-50,
//       alignSelf: "center",
//     },
//     imgdetail:{
//       backgroundColor:"#2ED1C0",
//       height: 230,
//       width:"80%",
//       margin:15,
//       borderRadius:6,
//       padding:-50,
//       alignSelf: "center",
//     },
//     detimg: {
//       position: 'absolute',
//         top: -6,
//       width: "80%",
//       height: 220,
//       borderRadius: 8,
//       margin: 12,
//       alignSelf:'center',
//     },
//     shadowProp: {
//       shadowOffset: {width: -4, height: 5},
//       shadowColor: '#2ED1C0',
//       shadowOpacity: 0.2,
//       shadowRadius: 5,
//     },

//     container: {
//       width: width / 2 - 20,
//       height: 250,
//       padding: 5,
//       borderRadius: 10,
//       borderColor: '#2ED1C0',
//       borderWidth: 0.25,
//       marginTop: 16,
//       marginBottom: 5,
//       marginLeft: 10,
//       alignItems: 'center',
//       elevation: 4,
//       backgroundColor: 'white'
//   },
//   imag: {
//     width: 115,
//     height: 115,
//     borderRadius: 115 / 2,
//     overflow: "hidden",
//     borderWidth: 1,
//     borderColor: 'transparent',
//     margin:12
//   },
//   card: {
//       marginBottom: 10,
//       height: width / 2 - 10 - 90,
//       backgroundColor: 'transparent',
//       width: width / 2 - 20 - 10
//   },
//   title: {
//       fontWeight: "bold",
//       fontSize: 14,
//       textAlign: 'center'
//   },
//   price: {
//       fontSize: 18,
//       color: 'orange',
//       //marginTop: 5,
//       textAlign:'flex-start',
//       padding:3
//   },
//   listContainer: {
//     height: height,
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "flex-start",
//     flexWrap: "wrap",
//     backgroundColor: "white",
//   },
//   searchvw:{
//     backgroundColor: "#FFFFFF",
//     height: 50,
//     width:"65%",
//     flexDirection:'row',
//     alignSelf:'flex-end',
//     margin:6,
//     borderRadius:3,
//     padding:16
//   },
//   header:{
//     flexDirection:'row',
//    // width:"100%",
//     borderRadius:5,
//     padding:5,
//     justifyContent: "space-between",
//   },
//   headtxt:{
//     fontSize:16,
//     padding:8,
//   },
//   headertxt:{
//     fontSize:16,
//     padding:8,
//     color:'#2ED1C0',
//   },
//   headtx:{
//     fontSize:20,
//     padding:8,
//     color:'#FFFFFF',
//     alignSelf:'center',
//   },
//   headt:{
//     fontSize:20,
//     padding:8,
//     fontWeight:'bold',
//     color:'#2ED1C0',
//   },
//   mkt:{
//     height: 2,
//     width: "100%",
//     backgroundColor: "#c8c8c8"
//   },
//   imgdet:{
//     backgroundColor:"#ffff",
//     height: 150,
//     width:"80%",
//     marginTop:60,
//     borderRadius:6,
//     padding:-50,
//     alignSelf: "center",
//   },
//   imgde:{
//     backgroundColor:"#ffff",
//     height: 300,
//     width:"95%",
//     marginTop:10,
//     borderRadius:4,
//     padding:-50,
//     alignSelf: "center",
//   },
//   tit: {
//     fontWeight: "normal",
//     fontSize: 14,
//     textAlign: 'center'
// },
//   cardet:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     padding:4
//   },
//   cart:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     padding:2
//   },
//   btncart:{
//     flexDirection:'row',
//     justifyContent:'space-evenly',
//     padding:5
//   },
//   btnlge: {
//     height:45,
//     width:"80%",
//     alignItem:'center',
//     backgroundColor:"#FFFFFF",
//     borderColor:"#D12E3F",
//     borderWidth:1,
//     borderRadius:5,
//     margin:30,
//     flexDirection:'row',
//     paddingLeft:99,
//     paddingTop:9,
//   },
//   btnmsm: {
//     height:40,
//     width:"45%",
//     alignSelf:'center',
//     backgroundColor:"#FFFFFF",
//     borderColor:"#D12E3F",
//     borderWidth:1,
//     borderRadius:5,
//     marginTop:15
//   },
//   textssm:{
//     color:'#D12E3F',
//     alignSelf:'center',
//     paddingTop:8,
//     fontWeight:'bold',
//     fontSize:16
//  },
//  textptd:{
//   color:'#FFFFFF',
//   alignSelf:'center',
//   padding:6,
//   fontWeight:'bold',
//   fontSize:12
// },
//   imagdat: {
//     width: 130,
//     height: 130,
//     borderRadius: 130 / 2,
//     overflow: "hidden",
//     borderWidth: 1,
//     borderColor: 'transparent',
//     margin:12,
//    // alignSelf:"center",
//   },

//  detailbg:{
//   backgroundColor:'#2ED1C0',
//   borderTopLeftRadius:5,
//   borderTopRightRadius:5,
//   height:"100%",
//   marginTop:5,
//  },
//  catcont: {
//   backgroundColor: "#2ED1C0",
//   width: "90%",
//   height: 135,
//   //alignItems: "center",
//   alignSelf: "center",
//   borderRadius: 5,
//   padding: 10,
//   marginTop: 15,
// },

// btnptd: {
//   height:35,
//   width:"20%",
//   alignSelf:'center',
//   backgroundColor:"#D12E3F",
//   borderRadius:5,
//   top:45,
//   right:5,
//   padding:6

// },

// emptyContainer: {
//   height: height,
//   alignItems: "center",
//   justifyContent: "center",
// },
// bottomContainer: {
//   width: "100%",
//   flexDirection: "row",
//   justifyContent: "space-between",
//   position: "absolute",
//   bottom: 10,
//   left: 0,
//   backgroundColor: "white",
//   elevation: 10,
//   padding: 8,
// },
// // price: {
// //   fontSize: 18,
// //   margin: 20,
// //   color: "red",
// // },
// hiddenContainer: {
//   flex: 1,
//   justifyContent: "flex-end",
//   flexDirection: "row",
// },
// hiddenButton: {
//   backgroundColor: "red",
//   justifyContent: "center",
//   alignItems: "flex-end",
//   paddingRight: 25,
//   height: 70,
//   width: width / 1.2,
// },
// bottomBar: {
//   backgroundColor: "white",
//   width: width,
//   height: 60,
//   padding: 2,
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
// },
// input: {
//   height: 40,
//   borderColor: "gray",
//   borderWidth: 1,
// },
// item: {
//   shadowColor: "#000",
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.2,
//   shadowRadius: 1,
//   elevation: 1,
//   padding: 5,
//   margin: 5,
//   backgroundColor: "white",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
//   borderRadius: 5,
// },
// containers: {
//   flexDirection: 'row',
//   padding: 5,
//   width: width
// },
// image: {
//   borderRadius: 50,
//   width: width / 6,
//   height: 20,
//   margin: 2
// },
// item: {
//   flexWrap: "wrap",
//   margin: 3,
//   width: width / 6
// },
// centeredView: {
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: 22
// },
// modalView: {
//   margin: 20,
//   backgroundColor: "white",
//   borderRadius: 20,
//   padding: 35,
//   alignItems: "center",
//   shadowColor: "#000",
//   shadowOffset: {
//       width: 0,
//       height: 2
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 3.84,
//   elevation: 5
// },
// textStyle: {
//   color: "white",
//   fontWeight: "bold"
// },
// label: {
//   width: "80%",
//   marginTop: 10,
// },
// buttonContainer: {
//   width: "80%",
//   marginBottom: 80,
//   marginTop: 20,
//   alignItems: "center",
// },
// buttonText: {
//   color: "white",
// },
// imageContainer: {
//   width: 200,
//   height: 200,
//   borderStyle: "solid",
//   borderWidth: 8,
//   padding: 0,
//   justifyContent: "center",
//   borderRadius: 100,
//   borderColor: "#E0E0E0",
//   elevation: 10,
// },
// imagevn: {
//   width: "100%",
//   height: "100%",
//   borderRadius: 5,
// },
// // imagePicker: {
// //   position: "absolute",
// //   right: 5,
// //   bottom: 5,
// //   backgroundColor: "grey",
// //   padding: 8,
// //   borderRadius: 100,
// //   elevation: 20,
// // },
// mapContain:{
//   height: "56%",
//   weidth: "100%",
// },
// topmap:{
//   flexDirection:"row",
//   justifyContent:'space-evenly',
//   backgroundColor:"#FFFFFF",
//    height:50,
//    width:"90%",
//     alignSelf:"center",
//     borderRadius:5,
//     margin:6
// },
// mapbott:{
//   flexDirection:'row',
//   justifyContent:'flex-start',
//   marginLeft:25,
//   //marginBottom:5,
// },
// signtxt:{
//   fontSize:23,
//   color:'white',
//   fontWeight:'bold',
//   left:15
// },
// inputtxt: {
//   width: '85%',
//   height: 50,
//   backgroundColor: 'white',
//   margin: 10,
//   borderRadius: 5,
//   padding: 15,
//   alignSelf:'center'
//  // borderWidth: 1,
//   //borderColor: 'orange'
// },
// filltxt:{
//   padding: 8,
//   marginTop:12,
//    fontSize: 20,
//     fontWeight: "bold",
//      alignSelf: "center",
//      color: '#fff'
// },
// inputtx: {
//   width: '85%',
//   height: 50,
//   backgroundColor: 'white',
//   margin: 5,
//   borderRadius: 5,
//   padding: 15,
//   alignSelf:'center'
// },
// imageContainer: {
//   width: 130,
//   height: 130,
//   borderStyle: "solid",
//   borderWidth: 1,
//   padding: 0,
//   justifyContent: "center",
//   borderRadius: 100,
//   borderColor: "#FFFFFF",
//   elevation: 10,
//   alignSelf: "center",
// },
// label: {
//   width: "80%",
//   marginTop: 10,
// },
// imagejv: {
//   width: "100%",
//   height: "100%",
//   borderRadius: 100,
// },
// imagePicker: {
//   position: "absolute",
//   right: 5,
//   bottom: 5,
//   backgroundColor: "grey",
//   padding: 8,
//   borderRadius: 100,
//   elevation: 20,
// },
// });
