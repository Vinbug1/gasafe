import React, { useState } from "react";
import { View,Text,Image,TouchableOpacity, Modal } from "react-native";
import styles from "../../shared/MainStyle";
import Icon from "react-native-vector-icons/FontAwesome"


const Product = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

    return(
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            underlayColor="#E8E8E8"
                            onPress={() => {
                                setModalVisible(false)
                            }}
                            style={{ 
                                alignSelf: "flex-end",
                                position: "absolute",
                                top: 5,
                                right: 10
                            }}
                        >
                            <Icon name="close" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                        medium 
                        secondary
                        onPress={() => [
                            props.navigation.navigate("ProductForm", { item: props}),
                            setModalVisible(false)
                        ]}
                        >
                            <Text style={styles.textStyle}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        medium 
                        danger
                        onPress={() => [props.delete(props._id), setModalVisible(false)]}
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("Product Detail", { item: props })
                }}
                onLongPress={() => setModalVisible(true)}
                style={[styles.container, {
                    backgroundColor: props.index % 2 == 0 ? "white" : "gainsboro"
                }]}
            >
                <Image 
                    source={{
                        uri: props.image
                        ? props.image
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text style={styles.item}>{props.name}</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">{props.name}</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">{props.category.name}</Text>
                <Text style={styles.item}>$ {props.price}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Product