import { View, Text, ImageBackground} from "react-native";
import Button from "../../components/Button"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input"
function Login() {

    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate("BottomTabs");
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={require("../../../assets/6.png")} style={{flex: 1, justifyContent: "flex-end"}}>
            <View style={{flex: 1, justifyContent: "space-between", alignItems: "center", padding: 30, flex: 2 / 3,      backgroundColor: "rgba(255, 255, 255, 0.26)", borderRadius: 30}}>
                <Input icon={true} placeholderr="Insira seu nome"/>
              <Button title="Login" onPress={handleNavigation}/>  
            </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default Login;