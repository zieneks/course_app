import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'


const home = () => {
  return (
    <SafeAreaView>
    <View>
      <SearchBar onSearch={(query) => console.log(query)} />
    </View>
    </SafeAreaView>
  )
}

export default home