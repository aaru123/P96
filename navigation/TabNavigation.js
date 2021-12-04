import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
//SCREENS
import Create from '../screens/create';
import Home from '../screens/Home';
import ViewScreen from '../screens/view';

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === 'Create') {
            iconName = focused ? 'add-circle' : 'add-circle-outline'
          }
          else if (route.name === "View"){
            iconName = focused ? 'eye' : 'eye-outline'
          }
          return <Ionicons name={iconName} size={30} color={color} style={{ width: 30 }} />
        },
      })}
      activeColor={'black'}
      inactiveColor={'white'}  >
         <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="View" component={ViewScreen} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "gray",
    height: "8%", borderTopLeftRadius: 30,
    borderTopRightRadius: 30, overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator
//continue from 82 to 83-10