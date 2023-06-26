import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VendorCard from './VendorCard';

const Vendor = (props) => {
  const navigation = useNavigation();
  const { item } = props;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('VendorDetails', { item })}>
      <View>
        <VendorCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default Vendor;
