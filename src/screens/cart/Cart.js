import React, { useContext, useEffect, useState } from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import CartItem from "./CartItem";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as actions from "../../../Redux/actions/cartActions";
import AuthGlobal from "../../../Context/store/AuthGlobal";
import axios from "axios";
import baseUrl from "../../../assets/common/baseUrl";
import styles from '../../shared/MainStyle';
import { numberFormat } from "@ricardojrmcom/number-format";


const Cart =(props)=>{
  const context = useContext(AuthGlobal);
  const navigation = useNavigation();

  // Add this
  const [productUpdate, setProductUpdate] = useState();
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    getProducts();
    return () => {
      setProductUpdate();
      setTotalPrice();
    };
  }, [props]);

  const getProducts = () => {
    var products = [];
    props.cartItems.forEach((cart) => {
      axios.get(`${baseUrl}products/${cart.product}`)
        .then((data) => {
          products.push(data.data);
          setProductUpdate(products);
    
          var total = 0;
          products.forEach((product) => {
            const price = (total += product.price);
            setTotalPrice(price);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    });
    
    // props.cartItems.forEach((cart) => {
    //   axios
    //     .get(`${baseUrl}products/${cart.product}`)
    //     .then((data) => {
    //       products.push(data.data);
    //       setProductUpdate(products);
    //       var total = 0;
    //       products.forEach((product) => {
    //         const price = (total += product.price);
    //         setTotalPrice(price);
    //       });
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // });
  };

  return (
    <>
      {productUpdate ? (
        <View
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ alignSelf: "center", padding: 8 }}>Cart</Text>
          <SwipeListView
            data={productUpdate}
            renderItem={(data) => <CartItem item={data} />}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  style={styles.hiddenButton}
                  onPress={() => props.removeFromCart(data.item)}
                >
                  <Icon name="trash" color={"white"} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000} friction={1000} tension={40} leftOpenValue={75} stopLeftSwipe={75} rightOpenValue={-75}
          />
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.price}>
                $ {totalPrice}
                {numberFormat(totalPrice).length > 4
                  ? numberFormat(totalPrice).substring(0, 4 - 3) + "..."
                  : numberFormat(totalPrice)}
              </Text>
            </View>
            <View>
              <TouchableOpacity danger medium onPress={() => props.clearCart()}>
                <Text style={{ color: "white" }}>Clear</Text>
              </TouchableOpacity>
            </View>
            <View>
              {context.stateUser.isAuthenticated ? (
                <TouchableOpacity
                  primary
                  medium
                  onPress={() => props.navigation.navigate("Checkout")}
                >
                  <Text style={{ color: "white" }}>Checkout</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  secondary
                  medium
                  onPress={() => props.navigation.navigate("Login")}
                >
                  <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Looks like your cart is empty</Text>
          <Text>Add products to your cart to get started</Text>
        </View>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);