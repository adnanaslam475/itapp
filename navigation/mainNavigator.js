import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'



const navigator = createStackNavigator({
    login: Login,
})


export default createAppContainer(navigator)

