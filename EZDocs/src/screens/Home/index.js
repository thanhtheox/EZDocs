import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import color from '../../assets/constants/colors';
import scale from '../../assets/constants/responsive';
import Header from '../../components/Header';
import FunctionButton from '../../components/FunctionButton';
import {IC_Summarize} from '../../assets/icons';
import {
  IMG_Chatbot,
  IMG_HomeBG,
  IMG_Summarize,
  IMG_Translate,
} from '../../assets/images';

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ImageBackground
        style={styles.background}
        source={IMG_HomeBG}
        resizeMode="cover">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chào mừng bạn đến với <Text style={styles.appName}>EZDocs</Text> </Text>
          
          <Text style={styles.title}>Hãy chọn 1 lựa chọn để bắt đầu</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.menu}>
            <FunctionButton
              backgroundColor={color.Orange}
              icon={IMG_Summarize}
              iconWidth={36}
              iconHeight={29}
              buttonName={'Tóm tắt văn bản'}
              onPress={() => navigation.navigate('Summarize')}
            />
            <FunctionButton
              backgroundColor={color.ForestGreen}
              icon={IMG_Translate}
              iconWidth={30}
              iconHeight={30}
              buttonName={'Dịch thuật'}
              onPress={() => navigation.navigate('Translate')}
            />
          </View>
          <FunctionButton
            backgroundColor={color.Blue}
            icon={IMG_Chatbot}
            iconWidth={36}
            iconHeight={36}
            buttonName={'Chat bot'}
            style={styles.chatbot}
            onPress={() => navigation.navigate('Chatbot')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: color.White,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    //width: '100%',
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(56),
    color: color.Black,
    fontWeight: '700',
  },
  appName: {
    fontSize: scale(56),
    color: color.ForestGreen,
    fontWeight: '700',
  },
  menu: {
    marginTop: scale(50),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    // borderColor: '#000',
    width: '50%',
    height: '40%',
  },
  chatbot: {
marginTop: scale(50),
  },
  text: {
    alignSelf: 'flex-end',
    color: color.Black,
    fontSize: scale(24),
    //fontWeight: '700',
  },
});
