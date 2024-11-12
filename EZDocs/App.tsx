/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import SummarizeScreen from './src/screens/Summarize';
import TranslateScreen from './src/screens/Translate';
import ChatbotScreen from './src/screens/Chatbot';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Summarize" component={SummarizeScreen} options={{ title: 'Tóm tắt văn bản' }} />
        <Stack.Screen name="Translate" component={TranslateScreen} options={{ title: 'Dịch thuật' }} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} options={{ title: 'Chat bot' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
