
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import { LinearGradient } from "expo-linear-gradient";


const {width, height} = Dimensions.get('screen')
console.log(width, height)
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
        letterSpacing: 0.16,
        lineHeight: 48,
        width: 300,
        alignSelf: "center",
    },
    secondText: {
        color: "#A2A2A2",
        fontSize: 14,
        textAlign: "center",
        lineHeight: 21,
        letterSpacing: 0.14,
        width: 300,
    },
    imageBackground: { 
        height: "70%",
        width: width, 
        resizeMode: "cover",
    },
    imgBackgroundView: { 
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 1)"
    }
});

function OnBoarding() {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={require("../../../assets/image.png")} imageStyle={Styles.imageBackground } style={Styles.imgBackgroundView }>
                <LinearGradient colors={['rgba(5, 5, 5, 0)', '#050505']} locations={[0, 0.40]} style={{gap: 39, height: 360, paddingBottom: 40, alignItems: "center", justifyContent: "flex-end"}}>
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