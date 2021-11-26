import React from 'react'
import { StyleSheet, Text, View, Image,TextInput,ScrollView,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#03f0fc', '#03fcba']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}>
                <Image source={require('../assets/male.png')} style={styles.user} />
                <TouchableOpacity style={styles.back} onPress={() => {props.navigation.navigate('Home')}} >
                <Ionicons name="ios-arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </LinearGradient>
            <ScrollView >
            <Text style={styles.label}>Profile Image</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Enter imageUrl"
                        placeholderTextColor="#636261"
                        selectionColor='black'
                        maxLength={35}
                        style={{ color: 'black', width: 200, fontSize: 16, paddingLeft: 5 }}
                        autoCapitalize="none"
                        onChangeText={() => { }}
                        onEndEditing={() => { }}
                    />
                    </View>
                <Text style={styles.label}>Name</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="#636261"
                        selectionColor='black'
                        maxLength={35}
                        style={{ color: 'black', width: 200, fontSize: 16, paddingLeft: 5 }}
                        autoCapitalize="none"
                        onChangeText={() => { }}
                        onEndEditing={() => { }}
                    />
                </View>
                <Text style={styles.label}>Age</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Enter age"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry={true}
                        selectionColor='black'
                        style={{ color: 'black', width: 195, fontSize: 16, }}
                        autoCapitalize="none"
                        onChangeText={() => { }}
                    />
                </View>
                <Text style={styles.label}>Height</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Enter height"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry={true}
                        selectionColor='black'
                        style={{ color: 'black', width: 195, fontSize: 16, }}
                        autoCapitalize="none"
                        onChangeText={() => { }}
                    />
                </View>
                <Text style={styles.label}>Weight</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Enter weight"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry={true}
                        selectionColor='black'
                        style={{ color: 'black', width: 195, fontSize: 16, }}
                        autoCapitalize="none"
                        onChangeText={() => { }}
                    />
                </View>
                <Text style={styles.label}>Religion</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Enter religion"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry={true}
                        selectionColor='black'
                        style={{ color: 'black', width: 195, fontSize: 16, }}
                        autoCapitalize="none"
                        onChangeText={() => { }}
                    />
                </View>
                <Text style={styles.label}>Caste</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Enter caste"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry={true}
                        selectionColor='black'
                        style={{ color: 'black', width: 195, fontSize: 16, }}
                        autoCapitalize="none"
                        onChangeText={() => { }}
                    />
                </View>
                <Text style={styles.label}>Mother Tongue</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Enter Language"
                        placeholderTextColor="#636261"
                        maxLength={8}
                        secureTextEntry={true}
                        selectionColor='black'
                        style={{ color: 'black', width: 195, fontSize: 16, }}
                        autoCapitalize="none"
                        onChangeText={() => { }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    user: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 150,
        width: 150,
        borderRadius: 80,
        marginTop: 30
    },
    gradient: {
        height: 250,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F66D64',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
        //fontWeight: 'bold'
        fontFamily:'OpenSans-SemiBold'
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
        justifyContent: 'space-between'
    },
    back:{
        flexDirection:'row',
        position:'absolute',
        top:70,
        left:25}
})
