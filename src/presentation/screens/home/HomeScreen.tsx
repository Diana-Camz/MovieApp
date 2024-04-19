import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useMovies from '../../hooks/useMovies'

const HomeScreen = () => {

  const {} =  useMovies();

  return (
    <View>
      <Text style={{color: 'black'}}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({});