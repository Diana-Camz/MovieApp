import { ActivityIndicator, View } from 'react-native'
import React from 'react'

const FullScreenLoader = () => {
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size={'large'} color={'#296aca'}/>
    </View>
  )
}

export default FullScreenLoader
