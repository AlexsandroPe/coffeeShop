
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import {HomeIcon, ShoppingBag} from "lucide-react-native"
import Delivery from '../../Screens/Delivery';

const {Navigator, Screen}  = createBottomTabNavigator();
function BottomNav() {
    return (
        <Navigator initialRouteName='Home'>
            <Screen name='Home' component={Home} options={{
                headerShown: false,
                tabBarLabel: "",
                tabBarIcon: ({focused}) => <HomeIcon size={28} color="#C67C4E" style={
                    {
                        
                        borderWidth: focused ? 1 : 0,
                        borderBottomColor: focused ? "#000": "#a19507ff"
                    }
                }/>
            }}/>
            <Screen name='Carrinho' component={Delivery} options={{
                headerShown: false,
                tabBarLabel: "",
                tabBarIcon: ({focused}) => <ShoppingBag size={28} color="#C67C4E" style={
                    {
                        
                        borderWidth: focused ? 1 : 0,
                        borderBottomColor: focused ? "#000": "#a19507ff"
                    }
                }/>
            }}/>
        </Navigator> 
    )
}


export default BottomNav;