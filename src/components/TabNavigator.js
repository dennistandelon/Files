import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Library from '../screens/Library';
import { Ionicons } from 'react-native-vector-icons/Ionicons'

const TabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#CDC9C3'
        },
        // tabBarIcon: ({ color, size }) => {
        //   return 
        //   <Image source={require("../assets/logo.png")}/>;
        // },
        tabBarActiveTintColor: '#439A97',
        tabBarInactiveTintColor: '#555555',
      })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})