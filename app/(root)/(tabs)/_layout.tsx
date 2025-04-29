import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';    
import { Image } from 'react-native';
import HomeIcon from '../../assets/icons/HomeIcon'; 
import SearchIcon from '../../assets/icons/SearchIcon'; 

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, 
        tabBarStyle: {
          position: 'absolute',
          minHeight: 70,
          backgroundColor: '#8D99AE',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          marginTop: 8, 
        },
    }}>
      <Tabs.Screen
        name="home" 
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              size={32}
              marginTop={16}
              color={focused ? '#2B2D42' : 'white'}
              focused={focused}
              title="Home"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#2B2D42' : 'white', fontSize: 14, marginTop: 8 }}>
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="search" 
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <SearchIcon
               marginTop={16}
              size={32}
              color={focused ? '#2B2D42' : 'white'}
              focused={focused}
              title="Search"
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#2B2D42' : 'white', fontSize: 14, marginTop: 7 }}>
              Search
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
