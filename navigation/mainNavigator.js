import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'

import SignUp from '../screens/signUp'
// import Events from '../screens/Events'



const navigator = createStackNavigator({
    login: Login,
    SignUp:SignUp,

})


export default createAppContainer(navigator)

