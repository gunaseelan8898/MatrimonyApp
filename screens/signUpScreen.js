import React,{useState} from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity,ScrollView, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const SignUpScreen = ({navigation}) => {

    return (
        <LinearGradient style={styles.container} colors={['#f7ae02', '#f547e1']}>
            <Text style={styles.title}>Register Now</Text>
            <BlurView style={styles.card}>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20,marginBottom:10}}>
                    <Image style={{ height:120, width:120,borderRadius:50}} source={require('../assets/male.png')} resizeMode='contain' />
                    <Image style={{ height:120, width:120,borderRadius:50}} source={require('../assets/female.png')} resizeMode='contain' />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.label}>E-mail</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                    <TextInput
                        placeholder="Enter valid mail-Id"
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
                <Text style={styles.label}>New Password</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="lock-outline" size={24} color="black" />
                    <TextInput
                        placeholder="Enter Valid Password"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry={true}
                        selectionColor='black'
                        style={{ color: 'black', width:195, fontSize: 16,}}
                        autoCapitalize="none"
                        onChangeText={() => {}}
                    />
                   
                            <Feather
                                name="eye-off"
                                color="#424242"
                                size={19}
                            />
                            
                </View> 
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.action}>
                    <MaterialCommunityIcons name="lock-outline" size={24} color="black" />
                    <TextInput
                        placeholder="Re-Enter Password"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry={true}
                        selectionColor='black'
                        style={{ color: 'black', width:195, fontSize: 16,}}
                        autoCapitalize="none"
                        onChangeText={()=> {} }
                    />
                            <Feather
                                name="eye-off"
                                color="#424242"
                                size={19}
                            />
                    </View>
                    <TouchableOpacity >
                <LinearGradient colors={['#ffffff','#d9d9d9']}
                 start={{ x: 0, y: 1 }}
                 end={{ x: 1, y: 1}}
                  style={styles.button}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'#0084ff'}}>Click here to Register</Text>
                </LinearGradient>
                </TouchableOpacity>
                </ScrollView>
            </BlurView>
        </LinearGradient>
    ) 
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        paddingBottom: 2,
        height: 30,
        width: '80%',
        marginLeft: 30,
        marginVertical:10,
        justifyContent:'space-between'
    },
    label: {
        marginHorizontal: 20,
        marginTop: 25,
        fontSize: 18,
        fontWeight: 'bold'
    },
    card: {
        height: '78%',
        width: '90%',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 0.3,
        marginHorizontal: 18,
        marginVertical:25,

    },
    view:{
        marginVertical:10,
        marginHorizontal:20
    },
    input:{
        height:40,
        width:275,
        borderRadius:10,
        paddingLeft:15,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        height:50,
        width:200,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:60,
        marginVertical:25,
        borderRadius:15,
        color:'#0084ff'
    }
})
