import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyBjInI_DHg4mYanOAF2W7JGanXebvEX31s';

const Search = () => {
  const { q } = useLocalSearchParams();
  const [query, setQuery] = useState(q as string || '');
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [resultCount, setResultCount] = useState(0); 
  const router = useRouter();

  const fetchVideos = async (searchTerm: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            q: searchTerm,
            part: 'snippet',
            maxResults: 20,
            type: 'video',
            key: YOUTUBE_API_KEY,
          },
        }
      );
      setVideos(response.data.items);
      setResultCount(response.data.items.length); 
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchVideos(query);
    }
  }, [query]);

  const handleSearch = (text: string) => {
    setQuery(text);
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      className="mb-4 items-center"
      onPress={() =>
        router.push({ pathname: '/(root)/details/[id]', params: { id: item.id.videoId,title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          description: item.snippet.description,
          } })
      }
    >
      <Image
        source={{ uri: item.snippet.thumbnails.high.url }}
        className="w-[90%] h-60 rounded-3xl mt-8 rounded-xl"
        resizeMode="cover"
      />
      <View className="mt-2 w-[90%]">
        <View>
          <Text className="text-sm font-bold ml-2 text-gray-800 mb-1" numberOfLines={1}>
            {item.snippet.channelTitle}
          </Text>
          <Text className="text-base ml-2 text-gray-800" numberOfLines={2}>
            {item.snippet.title}
          </Text>
        </View>
        <Text className="text-xs text-gray-600 mt-2 text-right">
          {new Date(item.snippet.publishedAt).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <SearchBar onSearch={handleSearch} />
      <Text className="text-lg  text-gray-800 px-6 pt-4">
         {resultCount} results found for:<Text className='font-bold'> "{query}"</Text>
      </Text>
      {loading ? (
        <ActivityIndicator size="large" className="mt-4" />
      ) : (
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.videoId}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
