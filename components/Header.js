import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';




export default function HeaderTab(props) {
    const [activeTab, setActiveTab] = useState('Normal')
    return (
        <LinearGradient colors={['#F66D64', '#F661A3']} style={styles.header}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <StatusBar barStyle='default' backgroundColor='transparent' translucent={true} />
            <View style={{ flexDirection: 'row', position: 'absolute', top:55, left: 115 , }}>
                <Swipe
                    text='Normal'
                    btnColor='white'
                    txtColor='black'
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <Swipe 
                text='Prime' 
                btnColor='grey' 
                txtColor='black' 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                />
            </View>
            
            <View>
           <Animatable.View
                animation='tada'
                iterationCount={10}
                duration={2000} delay={1000}
            >
            <Image source={require('../assets/handwaving.png')} style={{position:'absolute',height:40,width:40,top:128,left:80}} />
            </Animatable.View>
            <Text style={styles.hi}>Hi... Welcome</Text>
            <TouchableOpacity onPress={props.onSelect} style={{position:'absolute',top:68,left:25,height:25,width:25}}>
            <FontAwesome name="bars" size={26} color="white" />
            </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const Swipe = (props) => (
    <TouchableOpacity 
    onPress={() =>{ props.setActiveTab(props.text)}}
    style={{
        backgroundColor:props.activeTab === props.text ? 'rgb(246, 246, 246)':'transparent',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius: 30
    }}>
        <Text style={{ color: props.txtColor, fontSize: 16 ,fontWeight:'bold'}}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header: {
        height: 190,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    user: {
        position: 'absolute',
        height: 70,
        width: 70,
        left: 270,
        top:70,
        borderRadius: 50

    },
    hi: {
        position: 'absolute',
        top:140,
        left:135,
        fontSize:25,
        fontFamily:'Texturina-BoldItalic',
        //fontWeight:'bold',
        color: 'black'
    },
    userName: {
        position: 'absolute',
        top:150,
        left:260,
        fontSize:16,
        width:85,
         fontWeight:'100',
        color: 'white'
    }
})
