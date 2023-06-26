import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../shared/MainStyle';

const VendorCard = (props) => {
  const { name, description, image, phone } = props;

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Image
        style={styles.imag}
        resizeMode="cover"
        source={image ? { uri: image } : null}
      />
      <View style={{ marginTop: 16 }}>
        <Text style={styles.title}>
          {name.length > 15 ? `${name.substring(0, 15 - 3)}...` : name}
        </Text>
        <Text style={styles.price}>{description}</Text>
        <Text style={styles.price}>{phone}</Text>
      </View>
    </View>
  );
};

export default VendorCard;
