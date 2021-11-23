import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Image, View, StyleSheet, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import StackNavigator from './StackNavigator'
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

const AppDrawer = createDrawerNavigator({
    Drawer: StackNavigator
},
    {
        contentOptions: {
            activeTintColor: 'blue',

        },
        contentComponent: (props) => {
            return <LinearGradient colors={['#F66D64', '#F661A3']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }} style={{ flex: 1, paddingTop: 80 }}>
                <Image source={require('../assets/male.png')} style={styles.user} />
                <View style={styles.lineStyle} />
                <TouchableOpacity onPress={() => { props.navigation.navigate('Profile') }} style={{ flexDirection: 'row', marginLeft: 35, marginTop: 20, alignItems: 'center' }}>
                    <MaterialCommunityIcons name="account-circle-outline" size={30} color="black" />
                    <Text style={{ fontSize: 18, marginLeft: 15 }}>View Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 35, marginTop: 25, alignItems: 'center' }}>
                    <MaterialCommunityIcons name="account-edit-outline" size={30} color="black" />
                    <Text style={{ fontSize: 18, marginLeft: 15 }}>Edit Profile</Text>
                </TouchableOpacity>
                <View style={{
                    borderWidth: 0.2,
                    borderColor: 'black',
                    marginTop: 20,
                    marginHorizontal: 10
                }} />
                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 35, marginTop: 20, alignItems: 'center' }}>
                    <Ionicons name="ios-notifications-circle-outline" size={30} color="black" />
                    <Text style={{ fontSize: 18, marginLeft: 15 }}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 35, marginTop: 25, alignItems: 'center' }}>
                    <MaterialIcons name="search" size={30} color="black" />
                    <Text style={{ fontSize: 18, marginLeft: 15 }}>Searches</Text>
                </TouchableOpacity>
                <View style={{
                    borderWidth: 0.2,
                    borderColor: 'black',
                    marginTop: 20,
                    marginHorizontal: 10
                }} />
                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 35, marginTop: 20, alignItems: 'center' }}>
                    <MaterialIcons name="miscellaneous-services" size={30} color="black" />
                    <Text style={{ fontSize: 18, marginLeft: 15 }}>Other Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 35, marginTop: 25, alignItems: 'center' }}>
                    <AntDesign name="infocirlceo" size={25} color="black" />
                    <Text style={{ fontSize: 18, marginLeft: 15 }}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logout}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Logout</Text>
                </TouchableOpacity>

            </LinearGradient>
        }
    })

const styles = StyleSheet.create({
    user: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 100,
        width: 100,
        borderRadius: 50
    },
    lineStyle: {
        borderWidth: 0.2,
        borderColor: 'black',
        marginTop: 30,
        marginHorizontal: 10
    },
    logout: {
        width: 180,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginLeft: 50,
        marginTop: 100

    }
})

export default createAppContainer(AppDrawer);