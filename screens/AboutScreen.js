import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = (props) => {
    return (
        <View style={{flex:1,backgroundColor:'#fff2f4'}}>
        <LinearGradient colors={['#F66D64', '#F661A3']} style={styles.header}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
                <View style={{flexDirection:'row',position:'absolute',top:70,left:25}}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('Home')}} >
                <Ionicons name="ios-arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title} >About us</Text>
                </View>
            </LinearGradient>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                             <Image style={{ height:180, width:200, borderRadius: 50,marginVertical:15 }} source={require('../assets/new1.png')} resizeMode='contain' />
                             <Text style={{marginVertical:10,marginHorizontal:20,fontSize:18,fontFamily:'OpenSans-Regular'}}>Find your life partner. Trusted by lakhs of Brides and Grooms world wide. Register Now! 100% Secure and Trusted site. Millions of success stories. Over 35 Million members. Matches in your Community. Trusted by Millions. Photo Matches via Email.</Text>
            </View>
           
             </View>
    )
}

export default AboutScreen

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
