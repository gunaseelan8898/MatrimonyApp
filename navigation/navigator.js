import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import splashScreen from "../screens/splashScreen";
import SignInScreen from "../screens/signInScreen";
import SignUpScreen from "../screens/signUpScreen";
import homeScreen from "../screens/homeScreen";

const AuthNavigator = createStackNavigator({
    Splash:splashScreen,
    SignIn:SignInScreen,
    SignUp:SignUpScreen,
},
{
    headerMode:'none'
})

const HomeNavigator = createStackNavigator({
     home:homeScreen,
},
{
    headerMode:'none'
}
    )

const Root = createStackNavigator({
    Auth:AuthNavigator,
    Home:HomeNavigator
},
{
    headerMode:'none'
})

export default createAppContainer(Root);