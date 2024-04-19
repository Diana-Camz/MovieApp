import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';

export type RootStackParams = {
    Home: undefined;
    Details: {movieId: number}
}

const Navigation = () => {
    const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false }} initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default Navigation;

const styles = StyleSheet.create({})