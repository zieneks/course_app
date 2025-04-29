import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SearchIcon from '@/app/assets/icons/SearchIcon';
import SettingsIcon from '@/app/assets/icons/SettingsIcon';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = () => {
    onSearch(searchQuery);
  };

  return (
    <View style ={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <View style={styles.container}>
      <SearchIcon color="#888" size={32} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearchSubmit}
        placeholder="Search Videos"
        placeholderTextColor="#888"
      />
      
    </View>
    <TouchableOpacity>
        <SettingsIcon color="#888" size={32} style={styles.settingIcon} />
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    width: '80%',
    marginLeft: '5%',
  },
  icon: {
    marginHorizontal: 1,
  },
  settingIcon:{
    marginRight: 14,

  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 8,
  },
});

export default SearchBar;
