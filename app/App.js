import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, ProgressBar } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MyStack } from './src/stack/MyStack'

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#8963BA',
      secondary: '#AFE3C0'
    }
  }

  useEffect(() => {
    FontAwesomeIcons.loadFont()
    IonIcons.loadFont()
    Icon.loadFont()
  }, [])

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar animated={true} />
        <MyStack />
      </PaperProvider>
    </SafeAreaProvider>
  )
}
