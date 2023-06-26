import React, { useState, useCallback, useContext } from "react";
import Toast from "react-native-root-toast";
import axios from "axios";
import baseUrl from "../../../assets/common/baseUrl";
import styles from "../../shared/MainStyle";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Product from "../cards/Product";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  EvilIcons,
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OrderList from "./OrderList";
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthGlobal from "../../../Context/store/AuthGlobal";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";

const ListItem = () => {
  // const navigation = useNavigation();
  const context = useContext(AuthGlobal);
  const [image, setImage] = useState(null);
  const [mainImage, setMainImage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [color, setColor] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [focus, setFocus] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const backofftoggleModal = () => {
    setModalVisible(false);
    setImage();
    setMainImage("");
    setName("");
    setDescription("");
    setColor("");
    setQuantity("");
    setPrice("");
  };
  const visibility = () => {
    setShouldShow(false);
  };
  const invisible = () => {
    setShouldShow(true);
  };
  const openList = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };

  const uploadImg = () => {
    let productData = new FormData();
    const newImageUri = "file:///" + image.split("file:/").join("");
    productData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    productData.append("name", name);
    productData.append("description", description);
    productData.append("color", color);
    productData.append("quantity", quantity);
    productData.append("price", price);
    productData.append("user", user);

    console.log(productData);
    if (
      name === "" ||
      description === "" ||
      color === "" ||
      quantity === "" ||
      price === ""
    ) {
      Toast.show("Please fill in the form correctly", Toast.SHORT);
      return;
    }
    axios
      .post(`${baseUrl}products`, productData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          Toast.show("Product uploaded successfully", Toast.SHORT);
          backofftoggleModal();
        }
      })
      .catch((error) => {
        if (error.response) {
          Toast.show(error.message, Toast.SHORT);
          console.log(error);
        } else if (error.request) {
          Toast.show("No response from the server", Toast.SHORT);
          console.log(error.request);
        } else {
          Toast.show("Error in request setup", Toast.SHORT);
          console.log("Error", error.message);
        }
      });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    //console.log(result);
    if (!result.cancelled) {
      setMainImage(result.uri);
      setImage(result.uri);
    }
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     AsyncStorage.getItem("jwt").then((tkn) => {
  //         //console.log("checkening token",tkn);
  //         axios({
  //           method: "GET",
  //           url: `${baseUrl}products/user/${userId}`,
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: "Bearer " + tkn,
  //           },
  //         }).then((res) => {
  //             setLoading(false);
  //             setProductsFiltered(res.data);
  //             setProducts(res.data);
  //           }).catch((error) => {
  //             Toast.show(error.message, Toast.SHORT);
  //           });

  //         // axios({
  //         //   method: "GET",
  //         //   url: `${baseUrl}orders`,
  //         //   headers: {
  //         //     "Content-Type": "application/json",
  //         //     Authorization: "Bearer " + tkn,
  //         //   },
  //         // }).then((res) => {
  //         //     setLoading(false);
  //         //     setOrders(res.data);
  //         //   }).catch((error) => {  Toast.show(error.message, Toast.SHORT); });
  //       })
  //       .catch((error) => {
  //         console.error("Error retrieving JWT token:", error);
  //       });

  //     return () => {
  //       setProducts([]);
  //      // setOrders([]);
  //       setProductsFiltered([]);
  //     };
  //   },[baseUrl, userId, setLoading, setProductsFiltered, setProducts, setOrders])
  // );

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("userString")
        .then((userDetails) => {
          if (userDetails) {
            const user = JSON.parse(userDetails);
            //console.log("find vendor details", user);
            setUser(user.userId);
            setUserId(user.userId);
            setToken(user.token);
          } else {
            console.log("Object not found in AsyncStorage");
          }
        })
        .catch((error) => {
          console.error("Error retrieving object:", error);
        });

      return () => {
        setUser();
        setUserId();
        setToken();
      };
    }, [context.stateUser.isAuthenticated, setUser, setUserId])
  );

  // useFocusEffect(
  //   useCallback(() => {
  //     AsyncStorage.getItem("jwt").then((tkn) => {
  //       axios({
  //         method: "GET",
  //         url: `${baseUrl}products/user/${userId}`,
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + tkn,
  //         },
  //       })
  //         .then((res) => {
  //           setLoading(false);
  //           setProductsFiltered(res.data);
  //           setProducts(res.data);
  //         })
  //         .catch((error) => {
  //           Toast.show(error.message, Toast.SHORT);
  //         });

  //       axios({
  //         method: "GET",
  //         url: `${baseUrl}orders`,
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + tkn,
  //         },
  //       })
  //         .then((res) => {
  //           setLoading(false);
  //           setOrders(res.data);
  //         })
  //         .catch((error) => {
  //           Toast.show(error.message, Toast.SHORT);
  //         });

  //       return () => {
  //         setProducts([]);
  //         setOrders([]);
  //         setProductsFiltered([]);
  //       };
  //     });
  //   }, [])
  // );

  // useFocusEffect(
  //   useCallback(() => {
  //     AsyncStorage.getItem("userString")
  //       .then((userDetails) => {
  //         if (userDetails) {
  //           const user = JSON.parse(userDetails);
  //           console.log("find vendor details",user);
  //           setVendor(user);
  //           setUserId(user.userId);

  //         } else {
  //           console.log("Object not found in AsyncStorage");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error retrieving object:", error);
  //       });

  //     return () => {
  //       setVendor();
  //       setUserId();
  //     };
  //   }, [context.stateUser.isAuthenticated])
  // );

  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={{ marginTop: 25 }}>
        <View style={[styles.header, styles.shadowProp]}>
          {/* <TouchableOpacity
          style={{ left: 8, top: 5 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircleo" size={28} color="#2ED1C0" />
        </TouchableOpacity> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // alignSelf: "center",
              // marginRight: 120,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: "#2ED1C0",
                padding: 15,
              }}
            >
              Products
            </Text>
            <Fontisto
              name="shopping-store"
              size={25}
              color="#2ED1C0"
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>
        <View
          style={{ height: 3, width: "100%", backgroundColor: "#62f5e5" }}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            onPress={visibility}
            style={[
              styles.btnsmd,
              styles.shadowProp,
              !shouldShow ? { backgroundColor: "#2ED1C0" } : null,
            ]}
          >
            <Text
              style={[styles.txtsmd, !shouldShow ? { color: "#FFFFFF" } : null]}
            >
              Products
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={invisible}
            style={[
              styles.btnsmd,
              styles.shadowProp,
              shouldShow ? { backgroundColor: "#2ED1C0" } : null,
            ]}
          >
            <Text
              style={[styles.txtsmd, shouldShow ? { color: "#FFFFFF" } : null]}
            >
              OrderList
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: "white", height: "100%", marginTop: 15 }}
        >
          {/* {shouldShow ? (
            <View
              contentContainerStyle={{ padding: 9 }}
              vertical
              showsVerticalScrollIndicator={false}
            >
              <OrderList orders={orders} />
            </View>
          ) : ( */}
          <View
            contentContainerStyle={{ padding: 9 }}
            vertical
            showsVerticalScrollIndicator={false}
          >
            <Product products={productsFiltered} />
          </View>
          {/* )} */}
          <View>
            <TouchableOpacity
              onPress={() => toggleModal()}
              style={[styles.fab, styles.shadowProp]}
            >
              <MaterialCommunityIcons
                name="gas-cylinder"
                size={38}
                color="white"
                style={{ alignSelf: "center", padding: 20 }}
              />
              {/* <Text style={{ color: "white", fontWeight: "bold" }}>Product</Text> */}
            </TouchableOpacity>
          </View>
        </View>
        <>
          <Modal isVisible={isModalVisible}>
            <SafeAreaView
              style={{
                height: "68%",
                //Platform.OS === "ios" ? "25%" : "28%",
                width: "100%",
                backgroundColor: "white",
                alignSelf: "center",
                borderRadius: 5,
              }}
            >
              <View>
                <TouchableOpacity onPress={() => backofftoggleModal()}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 14,
                    alignSelf: "center",
                    fontWeight: "bold",
                    color: "#2ED1C0",
                  }}
                >
                  New Product
                </Text>
              </View>

              <KeyboardAwareScrollView>
                <View style={{ margin: 5 }}>
                  <View style={[styles.pdimageCon, styles.shadowProp]}>
                    <Image
                      style={[styles.imagejp, styles.shadowProp]}
                      source={{ uri: mainImage }}
                    />
                    <TouchableOpacity
                      onPress={pickImage}
                      style={styles.pdimagePck}
                    >
                      <EvilIcons name="camera" size={30} color="#2ED1C0" />
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    style={[styles.txtInput, styles.shadowProp]}
                    placeholder="Name"
                    onChangeText={(text) => setName(text)}
                    value={name}
                  />

                  <TextInput
                    style={[styles.despInput, styles.shadowProp]}
                    placeholder="Descriptions"
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <TextInput
                      style={[styles.desInput, styles.shadowProp]}
                      placeholder="Color"
                      onChangeText={(text) => setColor(text)}
                      value={color}
                    />
                    <TextInput
                      style={[styles.desInput, styles.shadowProp]}
                      placeholder="Quantity"
                      onChangeText={(text) => setQuantity(text)}
                      value={quantity}
                    />
                  </View>
                  <TextInput
                    style={[styles.txtInput, styles.shadowProp]}
                    placeholder="Price"
                    onChangeText={(text) => setPrice(text)}
                    value={price}
                  />
                </View>
                <TouchableOpacity
                  style={styles.btnlg}
                  onPress={() => uploadImg()}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      padding: 12,
                    }}
                  >
                    UpLoad
                  </Text>
                </TouchableOpacity>
              </KeyboardAwareScrollView>
            </SafeAreaView>
          </Modal>
        </>
      </View>
    </SafeAreaView>
  );
};

export default ListItem;

// const navigation = useNavigation();
// const context = useContext(AuthGlobal);
// const [image, setImage] = useState(null);
// const [mainImage, setMainImage] = useState("");
// const [name, setName] = useState();
// const [description, setDescription] = useState();
// const [color, setColor] = useState();
// const [quantity, setQuantity] = useState();
// const [price, setPrice] = useState();
// const [vendor, setVendor] = useState();
// const [products, setProducts] = useState([]);
// const [orders, setOrders] = useState([]);
// const [focus, setFocus] = useState(false);
// const [refresh, setRefresh] = useState(false);
// const [loading, setLoading] = useState(true);
// const [shouldShow, setShouldShow] = useState(false);
// const [productsFiltered, setProductsFiltered] = useState([]);
// const [search, setSearch] = useState("");
// const [isModalVisible, setModalVisible] = useState(false);

// const toggleModal = () => {
//   setModalVisible(!isModalVisible);
// };
// const openList = () => {
//   setFocus(true);
// };

// const onBlur = () => {
//   setFocus(false);
// };
// const clickHandler = () => {
//   //function to handle click on floating Action Button
//   alert("Floating Button Clicked");
// };
// const visibility = () => {
//   setShouldShow(false);
// };

// const invisible = () => {
//   setShouldShow(true);
// };

// const pullMe = () => {
//   setRefresh(true);
//   setTimeout(() => {
//     setRefresh(false);
//   }, 3000);
// };
// const uploadImg = () => {
//   let productData = new FormData();
//   const newImageUri = "file:///" + image.split("file:/").join("");
//   productData.append("image", {
//     uri: newImageUri,
//     type: mime.getType(newImageUri),
//     name: newImageUri.split("/").pop(),
//   });
//   productData.append("name", name);
//   productData.append("description", description);
//   productData.append("color", color);
//   productData.append("quantity", quantity);
//   productData.append("price", price);
//   productData.append("vendor", vendor);

//   if (
//     name === "" ||
//     description === "" ||
//     color === "" ||
//     quantity === "" ||
//     price === ""
//   ) {
//     setError("Please fill in the form correctly");
//   } else {
//     axios
//       .post(`${baseUrl}products`, productData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         // headers: {
//         //   "Content-Type": "application/x-www-form-urlencoded",
//         // },
//       })
//       .then((res) => {
//         if (res.status === 200 || res.status === 201) {
//           Toast.show("Product uploaded successfully", Toast.LENGTH_SHORT);
//           //navigation.navigate("SignIn");
//         }
//       })
//       .catch((error) => {
//         if (error.response) {
//           Toast.show(error.message, Toast.LENGTH_SHORT);
//           console.log(error);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser
//           Toast.show("No response from the server", Toast.LENGTH_SHORT);
//           console.log(error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           Toast.show("Error in request setup", Toast.LENGTH_SHORT);
//           console.log("Error", error.message);
//         }
//       });
//   }
// };

// const pickImage = async () => {
//   let result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.All,
//     allowsEditing: true,
//     aspect: [4, 3],
//     quality: 1,
//   });

//   console.log(result);

//   if (!result.cancelled) {
//     setMainImage(result.uri);
//     setImage(result.uri);
//   }
// };

// useFocusEffect(
//   useCallback(() => {
//     AsyncStorage.getItem("jwt").then((tkn) => {
//       axios({
//         method: "GET",
//         url: `${baseURL}products`,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + tkn,
//         },
//       })
//         .then((res) => {
//           setLoading(false);
//           setProductsFiltered(res.data);
//           setProducts(res.data);
//         })
//         .catch((error) => {
//           Toast.show(error.message, Toast.LENGTH_SHORT);
//         });

//       axios({
//         method: "GET",
//         url: `${baseURL}orders`,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + tkn,
//         },
//       }).then((res) => {
//           setLoading(false);
//           setOrders(res.data);
//         }).catch((error) => {
//           Toast.show(error.message, Toast.LENGTH_SHORT);
//         });
//       return () => {
//         setProducts([]);
//         setOrders([]);
//         setProductsFiltered([]);
//         //setVendor();
//       };
//     });
//   })
// );
// useFocusEffect(
//   useCallback(() => {
//     AsyncStorage.getItem("userString")
//       .then((userDetailts) => {
//         if (userDetailts) {
//           const user = JSON.parse(userDetailts);
//           setVendor(user);
//         } else {
//           console.log(" Object not found in AsyncStorage");
//         }
//       })
//       .catch((error) => {
//         console.error("Error retrieving object:", error);
//       });
//     return () => {
//      setVendor();
//     };
//   }, [context.stateUser.isAuthenticated])
// );

// return (
//   <SafeAreaView style={styles.container}>
//   <KeyboardAwareScrollView style={{ flex: 1 }}>
//     <View style={styles.searchView}>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search"
//         value={search}
//         onChangeText={(text) => {
//           setSearch(text);
//           if (text) {
//             const newData = products.filter((item) => {
//               const itemData = item.name
//                 ? item.name.toUpperCase()
//                 : "".toUpperCase();
//               const textData = text.toUpperCase();
//               return itemData.indexOf(textData) > -1;
//             });
//             setProductsFiltered(newData);
//             setRefresh(false);
//           } else {
//             setProductsFiltered(products);
//             setRefresh(false);
//           }
//         }}
//       />
//       <TouchableOpacity
//         style={styles.searchIcon}
//         onPress={() => {
//           if (focus) {
//             onBlur();
//           } else {
//             openList();
//           }
//         }}
//       >
//         {focus === false ? (
//           <EvilIcons name="search" size={24} color="black" />
//         ) : (
//           <AntDesign name="close" size={24} color="black" />
//         )}
//       </TouchableOpacity>
//     </View>

//     {shouldShow ? (
//       <View>
//         <OrderList
//           orders={orders}
//           products={products}
//           refresh={refresh}
//           loading={loading}
//           pullMe={pullMe}
//         />
//       </View>
//     ) : (
//       <View>
//         <View style={{ alignItems: "center" }}>
//           <Modal
//             isVisible={isModalVisible}
//             style={styles.modal}
//             animationIn="slideInUp"
//             onBackdropPress={backofftoggleModal}
//           >
//             <View style={styles.modalView}>
//               <Text style={styles.modalTitle}>Add Product</Text>
//               <TouchableOpacity
//                 onPress={toggleModal}
//                 style={styles.modalClose}
//               >
//                 <MaterialCommunityIcons
//                   name="close-circle"
//                   size={24}
//                   color="#333"
//                 />
//               </TouchableOpacity>

//               <TextInput
//                 style={styles.modalTextInput}
//                 placeholder="Product Name"
//                 value={name}
//                 onChangeText={(text) => setName(text)}
//               />
//               <TextInput
//                 style={styles.modalTextInput}
//                 placeholder="Product Description"
//                 value={description}
//                 onChangeText={(text) => setDescription(text)}
//               />
//               <TextInput
//                 style={styles.modalTextInput}
//                 placeholder="Product Color"
//                 value={color}
//                 onChangeText={(text) => setColor(text)}
//               />
//               <TextInput
//                 style={styles.modalTextInput}
//                 placeholder="Product Quantity"
//                 keyboardType="numeric"
//                 value={quantity}
//                 onChangeText={(text) => setQuantity(text)}
//               />
//               <TextInput
//                 style={styles.modalTextInput}
//                 placeholder="Product Price"
//                 keyboardType="numeric"
//                 value={price}
//                 onChangeText={(text) => setPrice(text)}
//               />

//               <TouchableOpacity
//                 style={styles.modalBtn}
//                 onPress={uploadImg}
//               >
//                 <Text style={styles.modalBtnText}>Upload Product</Text>
//               </TouchableOpacity>
//             </View>
//           </Modal>

//           <TouchableOpacity
//             style={styles.floatingBtn}
//             onPress={() => {
//               toggleModal();
//             }}
//           >
//             <Fontisto name="shopping-store" size={30} color="white" />
//           </TouchableOpacity>
//         </View>

//         {loading ? (
//           <View style={styles.loader}>
//             <ActivityIndicator size="large" color="#000" />
//           </View>
//         ) : (
//           <View style={styles.listView}>
//             {productsFiltered.length > 0 ? (
//               <FlatList
//                 data={productsFiltered}
//                 renderItem={({ item }) => (
//                   <Product item={item} navigation={navigation} />
//                 )}
//                 keyExtractor={(item) => item._id}
//                 refreshing={refresh}
//                 onRefresh={() => {
//                   pullMe();
//                 }}
//               />
//             ) : (
//               <View style={styles.noProductsView}>
//                 <Text style={styles.noProductsText}>
//                   No products found. Add a new product.
//                 </Text>
//               </View>
//             )}
//           </View>
//         )}
//       </View>
//     )}
//   </KeyboardAwareScrollView>
// </SafeAreaView>

// );
