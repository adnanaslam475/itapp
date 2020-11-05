import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import SignUp from '../screens/signUp'



const navigator = createStackNavigator({
    SignUp:SignUp,
    login: Login,
})


export default createAppContainer(navigator)

