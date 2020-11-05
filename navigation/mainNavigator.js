import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Events from '../screens/Events'



const navigator = createStackNavigator({
    login: Login,
    events:Events,
})


export default createAppContainer(navigator)

