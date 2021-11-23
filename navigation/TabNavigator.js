import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import { createAppContainer } from "react-navigation";

const TabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen:HomeScreen,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return (
                <Ionicons name="ios-home-outline" size={24} color="black" />
            );
          },
        }
      },
        Search:{
            screen:SearchScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                  return (
                    <MaterialIcons name="search" size={26} color="black" />
                  );
                },
              }
        },
        Favourite:{
            screen:FavouritesScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                  return (
                    <MaterialIcons name="favorite-outline" size={26} color="black" />
                  );
                },
              }
        },
        Profile:{
            screen:ProfileScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                  return (
                    <MaterialIcons name="account-circle" size={26} color="black" />
                  );
                },
              }
        }

      },
        {
          initialRouteName: 'Home',
          activeColor:'#F66D64',
          inactiveColor: 'black',
          barStyle: { backgroundColor:'white',},
        }
      
)

export default createAppContainer(TabNavigator);