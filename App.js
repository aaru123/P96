import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigation';


export default function App(){
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    )
}
