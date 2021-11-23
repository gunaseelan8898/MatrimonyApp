import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import splashScreen from "../screens/splashScreen";
import SignInScreen from "../screens/signInScreen";
import SignUpScreen from "../screens/signUpScreen";

const AuthNavigator = createStackNavigator({
    Splash:splashScreen,
    SignIn:SignInScreen,
    SignUp:SignUpScreen,
   
},
{
    headerMode:'none'
})


export default createAppContainer(AuthNavigator);