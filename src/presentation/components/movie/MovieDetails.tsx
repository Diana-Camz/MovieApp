import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import CastActor from '../cast/CastActor';

interface Props {
    movie: FullMovie;
    cast: Cast[],
}

const MovieDetails = ({movie, cast}:Props) => {
  return (
    <View>
      <View style={{marginHorizontal: 20, marginBottom: 20,}}>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.subTitle}>{movie.rating}</Text>
            <Text style={styles.subTitle}> - {movie.genres.join(', ')}</Text>
        </View>
        <Text style={styles.title}>History</Text>
        <Text style={styles.description}>{movie.description}</Text>
        <Text style={styles.title}>Budget</Text>
        <Text style={styles.description}>{Formatter.currency(movie.budget)} USD</Text>
      </View>
      <View style={{marginHorizontal: 20, marginBottom: 50,}}>
        <Text style={styles.title}>Cast</Text>
        <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <CastActor actor={item}/>}
        />
      </View>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
    title: {
        color: '#444444',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
    },
    subTitle: {
        color: '#555555',
        fontSize: 12,
        opacity: 0.8,
    },
    description: {
        color: '#555555',
        fontSize: 13,
        opacity: 0.8,

    }
})