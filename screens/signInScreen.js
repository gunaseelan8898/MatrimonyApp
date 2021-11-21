import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const SignInScreen = ({ navigation }) => {
  

    return (
        <LinearGradient style={styles.container} colors={['#f7ae02', '#f547e1']}>
            <View style={{marginBottom:15   }}>
                 <ImageBackground source={require('../assets/new.png')} style={{ height: 150, width: 160}} resizeMode='contain' />
                 <Text style={{ fontWeight: '900', fontSize: 30, color: 'black' }}>Welcome !!!</Text>
            </View>
            <BlurView style={styles.card}>
                <Text style={styles.label}>E-mail</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                    <TextInput
                        placeholder="E-mail / Username"
                        placeholderTextColor="#636261"
                        selectionColor='black'
                        maxLength={35}
                        style={{ color: 'black', width:200, fontSize: 16,paddingLeft:5}}
                        autoCapitalize="none"
                        onChangeText={() => {}}
                        onEndEditing={() => { }}
                    />
                        <Ionicons name="checkmark" size={24} color="green" />
                        
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="lock-outline" size={24} color="black" />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry= {true}
                        selectionColor='black'
                        style={{ color: 'black', width:195, fontSize: 16,}}
                        autoCapitalize="none"
                        onChangeText= { () => {}}
                    />
                            <Feather
                                name="eye-off"
                                color="#424242"
                                size={19}
                            />
                         
                </View> 
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={styles.Button}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <View style={styles.Button}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>SignUp</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </BlurView>

        </LinearGradient>
    )
}

export default SignInScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: 'black',
        paddingBottom: 2,
        height: 30,
        width: '80%',
        marginLeft: 30,
        marginVertical: 5,
        justifyContent:'space-between'
    },
    card: {
        height: 275,
        width: '90%',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 0.3,
        marginTop: 5
    },
    label: {
        marginHorizontal: 20,
        marginTop: 25,
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        height: 30,
        width: '80%',
        borderBottomWidth: 0.2,
        borderColor: 'black',
        marginHorizontal: 30,
        marginVertical: 5,
    },
    Button: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 90,
        marginVertical: 20,
        borderRadius: 10
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        marginHorizontal:40,
    }
})