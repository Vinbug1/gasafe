import { SafeAreaView,View, Text } from 'react-native'
import React from 'react';
import styles from '../shared/MainStyle'
import AccountCard from './header/AccountCard';
import CardBody from './header/CardBody';


const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#ffff'}}>
      <View style={styles.header}>
          
      </View>
        <View style={styles.subContain}>
          <View>
              <AccountCard />
          </View>
          <View style={{backgroundColor:'#ffff',margin:3,   borderRadius:5,}}>
            <CardBody />
          </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen