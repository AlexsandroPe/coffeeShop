
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';

const {Navigator, Screen}  = createBottomTabNavigator();
function BottomNav() {
    return (
        <Navigator initialRouteName='Home'>
            <Screen name='Home' component={Home} options={{
                headerShown: false
            }}/>
        </Navigator> 
    )
}


export default BottomNav;