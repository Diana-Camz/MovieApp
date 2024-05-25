import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Cast} from '../../../core/entities/cast.entity';


interface Props {
    actor: Cast;
}

const CastActor = ({ actor}: Props) => {
  return (
    <View style={styles.container}>
        <Image 
        source={{uri: actor.avatar}}
        style={{width: 100, height: 150, borderRadius: 10}}/>
        <View style={styles.container}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color:'#444444'}}>{actor.name}</Text>
            <Text style={{fontSize: 12, opacity: 0.7, color:'#686767'}}>{actor.character}</Text>
        </View>
    </View>
  )
}

export default CastActor

const styles = StyleSheet.create({
    container:{
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    }
})