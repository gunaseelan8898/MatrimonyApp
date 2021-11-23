import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import StackNavigator from './navigation/StackNavigator';
import AppDrawer from './navigation/DrawerNavigator'

console.warn = () => {}

export default function App() {
  return (
    <View style={{flex:1}}>
      <AppDrawer/>
    </View>
  );
}

