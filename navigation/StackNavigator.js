import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import {createDrawerNavigator, DrawerItems} from  "react-navigation-drawer"

import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import TabNavigator from "./TabNavigator";
import MemberDetailScreen from "../screens/MemberDetailScreen";
import NotificationScreen from "../screens/NotificationScreen";
import OtherserviceScreen from "../screens/OtherserviceScreen";
import AboutScreen from "../screens/AboutScreen";

const StackNavigator = createStackNavigator({
    Auth: AuthNavigator,
    Home:TabNavigator,
    Member:MemberDetailScreen,
    Notification:NotificationScreen,
    Other:OtherserviceScreen,
    About:AboutScreen
},{
    headerMode:'none'
}
)

export default createAppContainer(StackNavigator);