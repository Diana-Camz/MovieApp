import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../../core/entities/movie.entity'
import MoviePoster from './MoviePoster'


interface Props {
    movies: Movie[];
    height?: number;
}

const PosterCarousel = ({height = 440, movies}:Props) => {
  return (
    <View style={{height, marginBottom: 30,}}>
      <Text style={styles.title}>Now Playing</Text>
      <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}>
        {movies.map(movie => (
        <MoviePoster 
        key={movie.id}
        movie={movie}
        />
      ))
        }
      </ScrollView>
    </View>
  )
}

export default PosterCarousel

const styles = StyleSheet.create({
    title:{
      fontSize: 20,
      fontWeight: '500',
      marginLeft: 10,
      paddingBottom: 10,
      color: '#444444',
    }
})