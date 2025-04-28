import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { Linking } from 'react-native';

const handleLinkPress = () => {
  Linking.openURL('https://www.example.com');
};

export default function Index() {
  return (
    <SafeAreaView className=' bg-[#8D99AE] flex-1 '>
          <ScrollView contentContainerClassName='flex-grow bg-[#8D99AE]   justify-start items-center'>
                <View className='mt-2'>
                    <Image  className="" source={require('../../assets/icons/logo.png')}/>
                </View>
                <View className='mt-28 '>
                    <Image  className="" source={require('../../assets/icons/app-icon.png')}/>
                </View>
    
                 <View className='mt-32 w-full px-12 '>
                       <Text className='text-3xl text-white'>Welcome to the best{'\n'}YouTube-based learning{'\n'}application.</Text>
                        <TouchableOpacity className='mt-8 items-center w-full bg-[#2B2D42] py-4 rounded-2xl'>
                            <Text className='text-white'>Login as a Guest</Text>
                        </TouchableOpacity>
                        <Text className='text-center items-center mt-8'>By continuing you agree with{'\n'}
                        <Text onPress={handleLinkPress} className="text-[#2B2D42] underline">
            Terms and Conditions
          </Text>{' '} and <Text onPress={handleLinkPress} className="text-[#2B2D42] underline">
            Privacy Policy
          </Text>
          </Text>
    
                 </View>
    
          </ScrollView>
    
        </SafeAreaView>
  );
}
