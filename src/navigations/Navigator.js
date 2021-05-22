import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import success from '../screens/success';
import ForgotPassword from '../screens/ForgotPassword'
import ResetPassword from '../screens/ResetPassword'


const stackNavigatorOptions = {
    headerShown: false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    success:{screen:success},
    ForgotPassword: {screen: ForgotPassword},
    ResetPassword:{ screen: ResetPassword}
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);
