import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie'
import MovieHeader from '../../components/movie/MovieHeader';
import MovieDetails from '../../components/movie/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

const DetailsScreen = ({ route }:Props) => {
  const {movieId} = route.params;
  const {isLoading, movie, cast = []} = useMovie(movieId)

  if(isLoading){
    return <Text>Loading...</Text>
  }
  return (
    <ScrollView>
      {/* HEADER */}
      <MovieHeader poster={movie!.poster} originalTitle={movie!.originalTitle} title={movie!.title}/>
      {/* DETAILS */}
      <MovieDetails movie={movie!} cast={cast!}/>
    </ScrollView>
  )
}

export default DetailsScreen;

const styles = StyleSheet.create({});