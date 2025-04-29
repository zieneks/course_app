import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';


const YOUTUBE_API_KEY='AIzaSyCUNLLk8g0Ym8HalMLozfgYdOaLESN4Izw';
const Search = () => {
  const { q } = useLocalSearchParams();
  const [query, setQuery] = useState(q as string || '');
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
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
      className="flex-row items-center gap-4 px-4 py-2 border-b border-gray-200"
      onPress={() =>
        router.push({ pathname: '/(root)/details/[id]', params: { id: item.id.videoId } })
      }
    >
      <Image
        source={{ uri: item.snippet.thumbnails.default.url }}
        className="w-24 h-20 rounded-md"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="font-semibold text-base" numberOfLines={2}>
          {item.snippet.title}
        </Text>
        <Text className="text-sm text-gray-500">{item.snippet.channelTitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <ActivityIndicator size="large" className="mt-6" />
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
