
import { Image, ImageBackground, Text, View, StyleSheet} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { LinearGradient } from "expo-linear-gradient";

const Styles = StyleSheet.create({
    text: {
        height: 194,
        justifyContent: "center",
        gap: 8,

    },
    mainText: {
        color: "white",
        fontSize: 32,
        textAlign: "center",
        letterSpacing: 0.5,
        lineHeight: 43,
        width: 300,
        alignSelf: "center",
    },
    secondText: {
        color: "white",
        fontSize: 14,
        textAlign: "center"
    },
    imageBackground: { 
        height: 552, 
        width: "100%", 
        resizeMode: "cover"
    },
    imgBackgroundView: { 
        flex: 1, 
        justifyContent: "flex-end",

    }
});

function OnBoarding() {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={{flex: 1, }}>
            <ImageBackground source={require("../../../assets/imageboarding.png")} imageStyle={Styles.imageBackground } style={Styles.imgBackgroundView }>
                <LinearGradient colors={["transparent", "rgba(0, 0, 0, 1)", "rgb(0, 0, 0)"]} style={{gap: 10, height: 320, paddingBottom: 40, alignItems: "center", justifyContent: "flex-end"}}>
                        <View style={Styles.text}>
                            <Text style={Styles.mainText}>Fall in Love with Coffee in Blissful Delight!</Text>
                            <Text style={Styles.secondText}>Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
                        </View>
                        <Button title="Get Started"  onPress={handleNavigation} />
                </LinearGradient>
            </ImageBackground>
        
        </SafeAreaView>
    )
}

//  <View style={{backgroundColor: "black", flex: 1, alignItems: "center", gap: 38, paddingBottom: 40}}></View>
export default OnBoarding; 