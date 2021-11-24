import React from 'react'
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import HeaderTab from '../components/Header'
import Card from '../components/Card'
import USER from '../data/dummy'


const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <HeaderTab onSelect={() => {
                props.navigation.toggleDrawer();
            }}></HeaderTab>
                <ScrollView horizontal={true}  style={{height:160,width:'100%',borderBottomLeftRadius:30,borderBottomRightRadius:30,}} >
               {USER.map((User) => 
               <View key={User.id} style={{height:100,width:90,padding:10,alignItems:'center',justifyContent:'center'}}> 
                   <Image source={User.imageUrl} style={{height:50,width:50,borderRadius:70}} />   
                <Text >
                {User.name}
                </Text> 
                </View>
                )}
                </ScrollView>
            
            <FlatList
                data={USER}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={itemData => 
                    <Card
                        image={itemData.item.imageUrl}
                        name={itemData.item.name}
                        age={itemData.item.age}
                        job={itemData.item.job}
                        salary={itemData.item.salary}
                        items={itemData.item.items}

                        onSelect={() => {
                            props.navigation.navigate('Member', {
                              userId: itemData.item.id,
                            });
                          }}
                    />
                        
                }
            />
        </View>
    )
}



export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor:'#e6ffff'
    },

})



