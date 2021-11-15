import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import Root from './navigation/navigator'

export default function App() {
  return (
    <View style={{flex:1}}>
    <Root/>
    </View>
  );
}

