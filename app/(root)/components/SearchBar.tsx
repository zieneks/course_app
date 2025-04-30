import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SearchIcon from '@/app/assets/icons/SearchIcon';
import SettingsIcon from '@/app/assets/icons/SettingsIcon';
import { Redirect } from 'expo-router';
import { useRouter } from 'expo-router';

type SearchBarProps = {
  onSearch: (query: string) => void;
};


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = () => {
    onSearch(searchQuery);
    router.push({ pathname: '/(root)/(tabs)/search' })}
    
  const handleSettingsPress = () => {
    router.push('/(root)/components/Settings'); 
  };


  return (


    <View style ={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <View className='px-4 py-2 flex flex-row items-center bg-white rounded-[14px] border-2 border-gray-300 w-[80%] ml-[5%]'>
      <SearchIcon color="#888" size={32} className='mx-1' />
      <TextInput
        className='flex-1 h-10 text-base px-2'
        value={searchQuery}
        
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearchSubmit}
        placeholder="Search Videos"
        placeholderTextColor="#888"
      />
      
    </View>
    <TouchableOpacity onPress={handleSettingsPress}>
      <SettingsIcon color="#888" size={32}  style={{ marginRight: 15 }} />
    </TouchableOpacity>
    
    </View>
  );
};



export default SearchBar;
