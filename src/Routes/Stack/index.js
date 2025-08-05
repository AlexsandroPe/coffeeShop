import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../../Screens/OnBoarding";
import Login from "../../Screens/Login";
import Home from "../../Screens/Home";
import BottomNav from "../Bottom";

const {Navigator, Screen} = createNativeStackNavigator();
function StackNav() {
    return (
        <Navigator initialRouteName="Onboarding">
            <Screen name="Onboarding" component={OnBoarding} options={{
                headerShown: false,
            }}/>
            <Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Screen name="BottomTabs" component={BottomNav} options={{headerShown: false}}/>
       </Navigator>
    )
}

export default StackNav;