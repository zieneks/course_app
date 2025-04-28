import { Tabs } from 'expo-router';
import { View } from 'react-native';    
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
          borderTopWidth: 1
          
        },

    }}>


        
        


      <Tabs.Screen
        name="home" 
        options={{
          title: 'Home',
          headerShown: false,
          
          tabBarIcon: ({ focused,color,size }) => (
            <HomeIcon
            
              focused={focused}
              title="Home"
              
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search" 
        options={{
          title: 'Search',
          headerShown: false,
            tabBarIcon: ({ focused,color,size }) => (
                <SearchIcon
                color={color}
                size={28}
                focused={focused}
                title="Search"
                />
            ),
        }}
      />
    </Tabs>
  );
}
