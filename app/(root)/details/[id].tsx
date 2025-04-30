import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import ViewsIcon from '@/app/assets/icons/ViewsIcon';
import LikesIcon from '@/app/assets/icons/LikesIcon';


const { width } = Dimensions.get('window');
const YOUTUBE_API_KEY = 'AIzaSyDrzIsgbD4b-FjAog4yP3I0-aQuHnLbcyQ';

const VideoDetails = () => {

  const video = require('../../assets/video/broadchurch.mp4')
  const { id: videoId, title, channelTitle, description } = useLocalSearchParams(); 
  const [paused, setPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'notes'>('details'); 
  const [statistics, setStatistics] = useState({ viewCount: '0', likeCount: '0' });

  useEffect(() => {
    const fetchStatistics = async () => {
      if (!videoId) {
        console.error('No VIDEO_ID provided.');
        Alert.alert('Error', 'No video ID provided. Please check the URL.');
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const stats = data.items[0].statistics;
          setStatistics({ viewCount: stats.viewCount, likeCount: stats.likeCount });
        } else {
          console.error('No video data found for the provided VIDEO_ID.');
          Alert.alert('Error', 'No video data found. Please check the video ID.');
        }
      } catch (error) {
        console.error('Error fetching video statistics:', error);
        Alert.alert('Error', 'Failed to fetch video statistics. Please try again later.');
      }
    };

    fetchStatistics();
  }, [videoId]); 

  const handleVideoError = (error: any) => {
    console.error('Video error:', error);
    Alert.alert('Error', 'Failed to load the video. Please try again later.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={video} 
        style={styles.video}
        useNativeControls={false}
        shouldPlay={!paused}
        onError={handleVideoError}
      />
      <ScrollView style={styles.detailsContainer}>
        
        <Text style={styles.title}>{title}</Text>
       
        <View style={styles.channelContainer}>
          <Text style={styles.channelName}>{channelTitle}</Text>
          
        </View>
        
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'details' && styles.activeTab]}
            onPress={() => setActiveTab('details')}
          >
            <Text style={[styles.tabText, activeTab === 'details' && styles.activeTabText]}>
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'notes' && styles.activeTab]}
            onPress={() => setActiveTab('notes')}
          >
            <Text style={[styles.tabText, activeTab === 'notes' && styles.activeTabText]}>
              Notes
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'details' ? (
          <View style={styles.tabContent}>
            <Text style={styles.detailDescription}>Description</Text>
            <Text>{description}</Text>
          </View>
        ) : (
          <View style={styles.tabContent}>
            
          </View>
        )}
        {activeTab === 'details' && ( 
          <View style={styles.infoRow}>
            <View style={styles.statContainer} >
            <ViewsIcon size={32} color='white'></ViewsIcon>
            <Text style={styles.views}>{statistics.viewCount} views</Text>
            </View>
            
            <View style={styles.statContainer}>
            <LikesIcon size={32} color='white'></LikesIcon>
            <Text style={styles.likes}>{statistics.likeCount} likes</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#2B2D42', 
    padding: 5,
    borderRadius: 8,},
  video: {
    width: width,
    height: (width * 9) / 16,
    backgroundColor: '#000',
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  channelContainer: {
    marginBottom: 16,
  },
  channelName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1F2937',
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  views: {
    fontSize: 14,
    color: 'white',
    backgroundColor: '#2B2D42',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  actionText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 4,
  },
  commentsSection: {
    marginTop: 16,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  comment: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2B2D42',
  },
  tabText: {
    fontSize: 16,
    color: '#6B7280',
  },
  activeTabText: {
    color: '#2B2D42',
    fontWeight: 'bold',
  },
  tabContent: {
    marginTop: 16,
    height: 100,
  },
  detailDescription:{marginBottom: 8,
    fontWeight: 'bold',},
  likes: {
    fontSize: 14,
    color: 'white',
    marginLeft: 16,
    backgroundColor: '#2B2D42',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
  },
});
