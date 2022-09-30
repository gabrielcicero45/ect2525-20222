import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'

export default function Header() {
  return (
    <View style={styles.header}>
    <Image source={require('../assets/pngwing.com.png')} style={styles.image} />
    <FontAwesome5 name='plus-square' size={24} color="black"/>
    <FontAwesome5 name='heart' size={24} color="black"/>
    <FontAwesome5 name='paper-plane' size={24} color="black"/>
  </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:50,
    backgroundColor:'#fff',
    
  },
  image:{
    resizeMode: 'contain',
    width: 120,
    height: 35,
  },
})
