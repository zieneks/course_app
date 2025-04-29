import { View, Text } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native';
import CategoryList from '../components/CategoryList';
import { useRouter } from 'expo-router';

const categories = ['React Native', 'React', 'TypeScript', 'JavaScript'];

const home = () => {
  
  const router = useRouter();

  const handleVideoPress = (videoId: string) => {
    router.push({ pathname: '/(root)/details/[id]', params: { id: videoId } });
  };

  return (
    <SafeAreaView>
      
      <ScrollView>
        <SearchBar onSearch={(query) => console.log(query)} />
        {categories.map((category) => (
          <View key={category} className="mb-8 mt-8">
            <View className="flex-row justify-between px-4 mb-2">
              <Text className="text-xl font-bold">{category}</Text>
              <TouchableOpacity
                onPress={() =>
                  router.push({ pathname: '/(root)/(tabs)/search', params: { q: category } })
                }
              >
                <Text className="text-blue-500 text-sm">Show more</Text>
              </TouchableOpacity>
            </View>
            <CategoryList
category={category}
onVideoPress={handleVideoPress}
              showPublicationDate={true} 
            />
            <View className="h-1 bg-black mt-8 rounded-full" />
          </View>
                  ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;