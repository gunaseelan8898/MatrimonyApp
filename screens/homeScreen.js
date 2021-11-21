import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'

import HeaderTab from '../components/Header'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <HeaderTab />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    
})
