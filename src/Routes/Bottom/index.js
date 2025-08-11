
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Pressable } from 'react-native';
import Home from '../../Screens/Home';
import {HomeIcon, ShoppingBag} from "lucide-react-native"
import Delivery from '../../Screens/Delivery';

const {Navigator, Screen}  = createBottomTabNavigator();
function BottomNav() {
    return (
        <Navigator initialRouteName='Home' screenOptions={{
            tabBarStyle:{
                paddingVertical: 10,
                height: 80,
                alignItems: "center"
            },
        }}>
            <Screen name='Home' component={Home} options={{
                headerShown: false,
                tabBarLabel: "",

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
                // tabBarIcon: ({focused}) => <HomeIcon size={28} color="#C67C4E" style={
                //     {
                        
                //         borderBottomWidth: focused ? 1 : 0,
                //         borderBottomColor: focused ? "#000": "#a19507ff"
                //     }
                // }/>
            }}/>
            <Screen name='Carrinho' component={Delivery} options={{
                headerShown: false,
                tabBarLabel: "",
                tabBarIcon: ({focused}) => (
                     <View style={{
                      gap: 6
                    }}>
                        <ShoppingBag 
                                size={26} 
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