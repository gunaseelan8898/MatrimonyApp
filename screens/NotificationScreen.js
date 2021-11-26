import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = (props) => {
    return (
        <LinearGradient colors={['#F66D64', '#F661A3']} style={styles.header}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
                <View style={{flexDirection:'row',position:'absolute',top:70,left:25}}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}} >
                <Ionicons name="ios-arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title} >Notifications</Text>
                </View>
            </LinearGradient>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    header: {
        height:130,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title:{
     fontSize:20,
     fontFamily:'OpenSans-SemiBold',
     paddingLeft:25,
     color:'white'
    }
})
