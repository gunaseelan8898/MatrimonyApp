import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#f7ae02', '#f547e1']} style={styles.header}>
                <StatusBar backgroundColor='#f7ae02' barStyle="light-content" />
                <Animatable.Image
                    animation="bounceIn"
                    duration={5000}
                    source={require('../assets/final.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </LinearGradient>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: 'white'
                }]}
                animation="fadeInUpBig"
            >
                <Text style={styles.title}>Find Your Perfect </Text>
                <Text style={styles.title}>Pair </Text>
                <Text style={styles.text}>Register For Free</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <LinearGradient
                            style={styles.signIn}
                            colors={['#f7ae02', '#f702db']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={styles.textSign}>Find Yours</Text>

                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View >
        </View >
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f547e1'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // borderTopLeftRadius:  30,
        // borderTopRightRadius: 30,
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#0d0d0d',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: 225,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});

