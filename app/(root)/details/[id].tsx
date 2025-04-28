import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const FilmDetalis = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>FilmDetalis</Text>
    </View>
  )
}

export default FilmDetalis