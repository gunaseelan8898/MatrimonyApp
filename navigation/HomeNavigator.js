import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from '../screens/HomeScreen'
import FavouritesScreen from '../screens/FavouritesScreen';
import ProfileScreen from '../screens/ProfileScreen'

const HomeNavigator = createStackNavigator({
    Home:HomeScreen, 
    Favourite:FavouritesScreen,
    Profile:ProfileScreen
},
{
   headerMode:'none'
}
   )

export default createAppContainer(HomeNavigator)