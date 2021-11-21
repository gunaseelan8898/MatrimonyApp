import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';


export default function HeaderTab() {
    const [activeTab, setActiveTab] = useState('Normal')
    return (
        <LinearGradient colors={['#F66D64', '#F661A3']} style={styles.header}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}>
            <StatusBar barStyle='default' backgroundColor='transparent' translucent={true} />
            <View style={{ flexDirection: 'row', position: 'absolute', top:50, left: 100 , }}>
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
            <Image source={require('../assets/male.png')} style={styles.user} />
            <Image source={require('../assets/menu1.png')} style={{position:'absolute',top:158,left:20,height:25,width:25}} />
            <View>
            <Text style={styles.hi}>Hi...</Text>
           <Animatable.View
                animation='tada'
                iterationCount={10}
                duration={2000} delay={1000}
            >
            <Image source={require('../assets/handwaving.png')} style={{position:'absolute',height:40,width:40,top:138,left:165}} />
            </Animatable.View>
             <Text style={styles.userName}>Gunaseelan</Text>
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
        height: 210,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    user: {
        position: 'absolute',
        height: 70,
        width: 70,
        left: 260,
        top:85,
        borderRadius: 50

    },
    hi: {
        position: 'absolute',
        top:150,
        left:110,
        fontSize:25,
        //fontWeight:'bold',
        color: 'black'
    },
    userName: {
        position: 'absolute',
        top:160,
        left:260,
        fontSize:16,
        width:85,
         fontWeight:'100',
        color: 'white'
    }
})
