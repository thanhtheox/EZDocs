import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import color from '../assets/constants/colors';
import scale from '../assets/constants/responsive';

const FunctionButton = ({ icon, buttonName, backgroundColor, iconWidth, iconHeight }) => {
  return (
   
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={{width: iconWidth, height: iconHeight}} />
      </View>
      <Text style={styles.text}>{buttonName}</Text>
    </TouchableOpacity>
   
  );
}

export default FunctionButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(200),
    width: scale(400), 
    borderRadius: scale(15),
  },
 
  
  iconContainer: {
    marginRight: scale(20), 
  },
  icon: {
    width: scale(90),
    height: scale(70),
  },
  text: {
    color: color.Black,
    fontSize: scale(32),
  },
});
