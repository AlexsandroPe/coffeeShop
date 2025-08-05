
import { Image, Text, View} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
function OnBoarding() {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={{flex: 1, }}>
            <Image source={require("../../../assets/6.png")} resizeMode="cover" resizeMethod="scale" style={{width:"100%"}}/>
            <View style={{backgroundColor: "black", flex: 1, alignItems: "center", gap: 38, paddingBottom: 40}}>
                <View style={{gap: 8, alignItems: "center",  flex: 1}}>
                    <Text style={{color: "white", fontSize: 30, textAlign: "center",lineHeight: 43, width:300}}>Fall in Love with Coffee in Blissful Delight!</Text>
                    <Text style={{color: "#A2A2A2", textAlign: "center", fontSize: 17, paddingHorizontal: 8}}>Welcome to our cuzy coffee corner, where every cup is delightful for you</Text>
                </View>
                <Button onPress={handleNavigation} title="Get Started"/>
            </View>
        </SafeAreaView>
    )
}


export default OnBoarding;