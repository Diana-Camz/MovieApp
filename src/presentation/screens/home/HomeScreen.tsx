import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import PosterCarousel from '../../components/movies/PosterCarousel';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';

const HomeScreen = () => {

  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =  useMovies();
  if(isLoading){
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView>
      <View>
        <Text style={[styles.title, {marginTop: top + 20 }]}>Home Screen</Text>
        {/* PRINCIPAL */}
        <PosterCarousel movies={nowPlaying} height={440}
        />
        {/* POPULAR */}
        <HorizontalCarousel movies={popular} title={'Popular'} loadNextPage={popularNextPage}/>
        {/* TOP RATED */}
        <HorizontalCarousel movies={topRated} title={'Top Rated'}/>
        {/* Coming soon */}
        <HorizontalCarousel movies={upcoming} title={'Coming soon'}/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    paddingBottom: 20,
    color: '#444444',

  }
});