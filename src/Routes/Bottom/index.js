
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Pressable } from 'react-native';
import Home from '../../Screens/Home';
import {Heart, HomeIcon, ShoppingBag} from "lucide-react-native"
const {Navigator, Screen}  = createBottomTabNavigator();
function BottomNav() {
    return (
        <Navigator initialRouteName='Home' screenOptions={{
            tabBarStyle:{
                paddingVertical: 10,
                height: 80,
                borderTopWidth: 0,
                borderTopStartRadius: 38,
                borderTopEndRadius:38,
                elevation: 4, 
                alignItems: "center"
            },
            tabBarItemStyle: {paddingTop: 10}
        }}>
            <Screen name='Home' component={Home} options={{
                headerShown: false,
                tabBarLabel: "",
                animation: "fade",
                tabBarIcon: ({focused}) => (
                     <View style={{
                         gap: 6
                    }}>
                        <HomeIcon 
                                size={28} 
                                color="#C67C4E"
                        />

                        {
                            focused ? (
                                <View style={{
                            width: focused ? 10 : 0,
                            borderWidth:focused ? 2: 0,
                            borderRadius: 18,
                            backgroundColor: "#C67C4E",
                            alignSelf: 'center',
                            borderColor: focused ? "#C67C4E" : null,
                            height: 5
                            }}></View>
                            ) : null
                        }
                         
                </View>
                )
            }}/>
           
            
        </Navigator> 
    )
}

export default BottomNav;