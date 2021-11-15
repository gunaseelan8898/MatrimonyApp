import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import splashScreen from "../screens/splashScreen";
import SignInScreen from "../screens/signInScreen";

const Root = createStackNavigator({
    Splash:splashScreen,
    SignIn:SignInScreen
},
{
    headerMode:'none'
})

export default createAppContainer(Root);