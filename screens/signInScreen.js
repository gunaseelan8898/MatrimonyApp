import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'


const SignInScreen = ({navigation}) => {
    return (
        <LinearGradient style={styles.container} colors={['#f7ae02', '#f547e1']}>
            <ImageBackground source={require('../assets/new.png')} style={{ height: 150, width: 160 }} resizeMode='cover' />
                <Text style={{ fontWeight: '900', fontSize: 30, color: 'black' }}>Welcome !!!</Text>
            <BlurView style={styles.card}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input}
                    keyboardType='visible-password' />
                
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                        <TouchableOpacity>
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
    image: {
        height: 150,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        height: 275,
        width: '85%',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 0.3,
        marginTop: 5
    },
    label: {
        marginHorizontal: 25,
        marginTop: 25,
        fontSize: 18, fontWeight: 'bold'
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
        width:90,
        marginVertical:20,
        borderRadius: 10
    }
})