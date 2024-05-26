import { NativeSyntheticEvent, NativeScrollEvent, StyleSheet, Text, View,  } from 'react-native'
import React, {useEffect, useRef} from 'react'
import { FlatList } from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';
import { Movie } from '../../../core/entities/movie.entity';

interface Props {
    movies: Movie[];
    title?: string,
    loadNextPage?: () => void;
}

const HorizontalCarousel = ({movies, title, loadNextPage}: Props) => {

  const isLoading = useRef(false)

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 2000);
  }, [movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current) return;
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
    if (!isReached) return;
    isLoading.current = true;
    loadNextPage && loadNextPage();
  }

  return (
    <View
    style={{height: title ? 260 : 220}}
    >
     {title && (
         <Text style={styles.title}>{title}</Text>
     )}
     <FlatList
     data={movies}
     renderItem={({item}) => (
        <MoviePoster movie={item} width={140} height={200}/>
     )}
     keyExtractor={(item) => item.id.toString()}
     horizontal
     showsHorizontalScrollIndicator={false}
     onScroll={onScroll}
     />
    </View>
  )
}

export default HorizontalCarousel

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10,
        paddingBottom: 10,
        color: '#444444',
      }
})