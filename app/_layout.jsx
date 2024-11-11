import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router'; // If using expo-router
import TabBar from '../components/TabBar';
import { icons } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';

const Layout = () => {
    const navigation = useNavigation();

    // Profile icon component
    const ProfileIcon = () => (
        <TouchableOpacity
            style={styles.profileIcon}
            onPress={() => navigation.navigate('/profile')} // Navigate to '/profile'
        >
            {icons.profile({ color: '#000' })}
        </TouchableOpacity>
    );

    return (
        <Tabs tabBar={(props) => <TabBar {...props} />} >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Dashboard",
                    headerLeft: () => <ProfileIcon /> // Profile icon in the header
                }}
            />
            <Tabs.Screen
                name="reports"
                options={{
                    title: "Live Reports",
                    headerLeft: () => <ProfileIcon /> // Profile icon in the header
                }}
            />
            <Tabs.Screen
                name="maps"
                options={{
                    title: "Maps",
                    headerLeft: () => <ProfileIcon /> // Profile icon in the header
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: "Notifications",
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
