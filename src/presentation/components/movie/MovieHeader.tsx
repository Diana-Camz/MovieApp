import { StyleSheet, Text, View, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react';
import { FullMovie } from '../../../core/entities/movie.entity';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    //movie: FullMovie // por buenas practicas es bueno solo mandar llamar la informacion que el componente va a necesitar
    poster: string;
    originalTitle: string;
    title: string;
}

const MovieHeader = ({poster, originalTitle, title}: Props) => {
    const {height: screenHeight} = useWindowDimensions();
    const navigation = useNavigation();
  return (
    <View>
      <View style={{...styles.imageContainer, height: screenHeight * 0.7}}>
        <View style={styles.imageBorder}>
            <Image
                style={styles.posterImage}
                source={{uri: poster}}
            />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{originalTitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.backButton}>
        <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>
                <Icon name='chevron-back-circle-sharp' size={45}/>
            </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default MovieHeader

const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
  
      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
  
    imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
    },
  
    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    subTitle: {
        color: '#555555',
      fontSize: 16,
      opacity: 0.8,
    },
    title: {
        color: '#444444',
      fontSize: 20,
      fontWeight: 'bold',
    },
    backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 35,
      left: 10,
    },
    backButtonText: {
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 0.30)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
    },
  });