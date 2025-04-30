import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

const VideoDetails = () => {

  const video = require('../../assets/video/broadchurch.mp4')
  const { title, channelTitle, description } = useLocalSearchParams(); 
  const [paused, setPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'notes'>('details'); 

  const handleVideoError = (error: any) => {
    console.error('Video error:', error);
    Alert.alert('Error', 'Failed to load the video. Please try again later.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={video} 
        style={styles.video}
        useNativeControls={true}
        shouldPlay={!paused}
        resizeMode="contain"
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
            <Text>Add your notes here...</Text>
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
    color: 'gray',
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
  },
  detailDescription:{marginBottom: 8,
    fontWeight: 'bold',}
  
});
