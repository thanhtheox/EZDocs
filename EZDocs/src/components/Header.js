import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react';
import color from '../assets/constants/colors';
import scale from '../assets/constants/responsive';

const Header = (props) => {
  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.text}>Trợ giúp</Text>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      height: scale(84),
      backgroundColor: color.Mindaro,
      justifyContent: 'center',
      elevation: 8,
      padding: scale(10),
    },
    text: {
      alignSelf: 'flex-end',
      color: color.Black,
      fontSize: scale(24),
      //fontWeight: '700',
    }
})