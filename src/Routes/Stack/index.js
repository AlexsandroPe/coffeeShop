import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../../Screens/OnBoarding";
import Login from "../../Screens/Login";
import BottomNav from "../Bottom";

const {Navigator, Screen} = createNativeStackNavigator();
function StackNav() {
    return (
        <Navigator initialRouteName="Onboarding">
            <Screen name="Onboarding" component={OnBoarding} options={{
                headerShown: false,
                animation: "slide_from_left"
            }}/>
            <Screen name="Login" component={Login}  options={{headerShown: false, animation: "slide_from_right" }}/>
            <Screen name="BottomTabs" component={BottomNav} options={{headerShown: false, animation: "slide_from_bottom"}}/>
       </Navigator>
    )
}

export default StackNav;