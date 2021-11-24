import React from "react";
import {View,Text,Button,ScrollView, Image, StyleSheet} from 'react-native';

import USER from "../data/dummy";

const MemberDetailScreen = props => {
    const userId = props.navigation.getParam('userId');
  const selectedUser = USER.find(user => user.id === userId);
    
    return(
       <ScrollView style={{backgroundColor:'#e6ffff'}}>
           <Image style={styles.image} source={selectedUser.imageUrl} />
           <View style={{marginHorizontal:30,marginTop:20}}>
           <Text style={styles.name}>Name   :   {selectedUser.name}</Text>
           <Text style={styles.description}>Age       :   {selectedUser.age}</Text>
           <Text style={styles.name}>Height  :   {selectedUser.height}</Text>
           <Text style={styles.description}>Weight  :   {selectedUser.weight}</Text>
           <Text style={styles.name}>Job       :   {selectedUser.job}</Text>
           <Text style={styles.description}>Salary   :   {selectedUser.salary}</Text>
           <Text style={styles.description}>Religion   :   {selectedUser.religion}</Text>
           
           </View>
       </ScrollView>
    )
}
 

const styles = StyleSheet.create({
    image:{
        marginTop:50,
        width:'100%',
        height:300,
        resizeMode:'contain',
        borderRadius:20
    },
    name:{
        margin:10,
      // textAlign:'center',
      color:'black',
       fontSize:20,
       fontFamily:'OpenSans-SemiBold',
    },
    description:{
        margin:10,
        fontSize:20,
        color:'black',
        fontFamily:'OpenSans-SemiBold',
    }
})



export default MemberDetailScreen;