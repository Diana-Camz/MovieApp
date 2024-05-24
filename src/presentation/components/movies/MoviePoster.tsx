import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'
import { Movie } from '../../../core/entities/movie.entity'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import { RootStackParams } from '../../navigation/Navigation';

interface Props{
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({movie, height=420, width=300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
    onPress={ () => navigation.navigate('Details', {movieId: movie.id})}
    style={ ({pressed}) => ({
      width,
      height,
      marginHorizontal: 4,
      paddingBottom: 20,
      paddingHorizontal: 5,
      opacity: pressed ? 0.9 : 1,
    })}
    >
      <View style={styles.imageContainer}>
        <Image
        style={styles.image}
        source={{uri: movie.poster}}
        />
      </View>
    </Pressable>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        elevation: 1,
    }
})