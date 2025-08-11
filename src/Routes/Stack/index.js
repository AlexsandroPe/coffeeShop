import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../../Screens/OnBoarding";
import Login from "../../Screens/Login";
import BottomNav from "../Bottom";
import Details from "../../Screens/Details";
import { HeartIcon } from "lucide-react-native";
import useLoadFonts from "../../hooks/useLoadFonts";
const {Navigator, Screen} = createNativeStackNavigator();
function StackNav() {
const fontsLoaded = useLoadFonts()

  if(!fontsLoaded) return null;
    
    return (
        <Navigator initialRouteName="Onboarding">
            <Screen name="Onboarding" component={OnBoarding} options={{
                headerShown: false,
                animation: "slide_from_left",
                headerTitleStyle: {fontFamily: "Sora_600SemiBold", fontSize: 16}
            }}/>

            <Screen name="Login" component={Login}  options={{headerShown: false, animation: "slide_from_right" }}/>
            <Screen name="BottomTabs" component={BottomNav} options={{headerShown: false, animation: "slide_from_bottom"}}/>
            <Screen name="Details" component={Details} options={{
                headerShown: true,
    
                 animation: "slide_from_bottom",
                headerTitleAlign: "center",
                headerRight: () => (
                    <HeartIcon size={30}/>
                ),
                headerShadowVisible: false,
                headerTitleStyle: {fontFamily: "Sora_600SemiBold", fontSize: 16}
                }}/>
       </Navigator>
    )
}

export default StackNav;