import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

type CategoryListProps = {
  category: string;
  onVideoPress: (videoId: string, title: string, channelTitle: string, description: string) => void;
  showPublicationDate?: boolean; 
};

const YOUTUBE_API_KEY = 'AIzaSyDrzIsgbD4b-FjAog4yP3I0-aQuHnLbcyQ';
const MAX_RESULTS = 5;

const CategoryList: React.FC<CategoryListProps> = ({ category, onVideoPress, showPublicationDate }) => {
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
      } catch (error:any) {
        console.error('Error fetching videos:', error.response?.data || error.message);
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
          onPress={() =>
            onVideoPress(video.id.videoId, video.snippet.title, video.snippet.channelTitle, video.snippet.description)
          }
          className="mr-4 w-52"
        >
          <Image
            source={{ uri: video.snippet.thumbnails.medium.url }}
            className="w-full h-28 rounded-xl mb-2"
          />
          <Text className="text-sm font-semibold text-gray-800" numberOfLines={2}>
            {video.snippet.title}
          </Text>
          {showPublicationDate && (
            <Text className="text-xs text-gray-600 ml-36">
               {new Date(video.snippet.publishedAt).toLocaleDateString()}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryList;
