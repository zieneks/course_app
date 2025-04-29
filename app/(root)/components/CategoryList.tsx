import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

type CategoryListProps = {
  category: string;
  onVideoPress: (videoId: string) => void;
};

const YOUTUBE_API_KEY = 'AIzaSyDj9r76UX3EIBzD6GCgs21bsnw_3z7jqTs'; 
const MAX_RESULTS = 10;

const CategoryList: React.FC<CategoryListProps> = ({ category, onVideoPress }) => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: YOUTUBE_API_KEY,
              q: category,
              part: 'snippet',
              type: 'video',
              maxResults: MAX_RESULTS,
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

    fetchVideos();
  }, [category]);

  if (loading) {
    return (
      <View className="items-center py-4">
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
      {videos.map((video) => (
        <TouchableOpacity
          key={video.id.videoId}
          onPress={() => onVideoPress(video.id.videoId)}
          className="mr-4 w-52"
        >
          <Image
            source={{ uri: video.snippet.thumbnails.medium.url }}
            className="w-full h-28 rounded-xl mb-2"
          />
          <Text className="text-sm font-semibold text-gray-800" numberOfLines={2}>
            {video.snippet.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
