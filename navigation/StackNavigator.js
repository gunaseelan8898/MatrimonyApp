import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import {createDrawerNavigator, DrawerItems} from  "react-navigation-drawer"

import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import TabNavigator from "./TabNavigator";
import MemberDetailScreen from "../screens/MemberDetailScreen";

const StackNavigator = createStackNavigator({
    Auth: AuthNavigator,
    Home:TabNavigator,
    Member:MemberDetailScreen
},{
    headerMode:'none'
}
)

export default createAppContainer(StackNavigator);