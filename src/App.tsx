import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './presentation/navigation/Navigation'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({});