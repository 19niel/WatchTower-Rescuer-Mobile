// _layout.jsx
import { TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Tabs } from 'expo-router'; // If using expo-router
import TabBar from '../components/TabBar';
import { icons } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import Login from '../components/Login'; // Import the Login component

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigation = useNavigation();

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Mark as logged in
  };

  // Profile icon component
  const ProfileIcon = () => (
    <TouchableOpacity
      style={styles.profileIcon}
      onPress={() => navigation.navigate('profile')} // Navigate to '/profile'
    >
      {icons.profile({ color: '#000' })}
    </TouchableOpacity>
  );

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />; // Show login screen if not logged in
  }

  // Render main tabs after login
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerLeft: () => <ProfileIcon /> // Profile icon in the header
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Live Reports',
          headerLeft: () => <ProfileIcon /> // Profile icon in the header
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: 'Maps',
          headerLeft: () => <ProfileIcon /> // Profile icon in the header
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          headerLeft: () => <ProfileIcon /> // Profile icon in the header
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    marginLeft: 16,
  },
});

export default Layout;
