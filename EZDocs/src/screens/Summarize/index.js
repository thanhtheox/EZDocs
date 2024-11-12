import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../../assets/constants/colors';

const SummarizeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tóm tắt văn bản</Text>
    </View>
  );
};

export default SummarizeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.White,
    },
  });
  