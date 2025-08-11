import React, {useEffect, useState } from "react";
import { View, Text, ImageBackground} from "react-native";
import Button from "../../components/Button"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input"
import useLoadFonts from "../../hooks/useLoadFonts";
function Login() {
    const [userName, setUserName] = useState("Amigo");
    const navigation = useNavigation();
    
  const fontsLoaded = useLoadFonts()

  if(!fontsLoaded) return null;
    const handleNavigation = () => {
        navigation.navigate("BottomTabs", {
            screen: "Home",
            params: {userName: userName}
        });
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground source={require("../../../assets/6.png")} style={{flex: 1, justifyContent: "flex-end", paddingTop: 30}}>
            <View style={{flex: 1, justifyContent: "space-between", alignItems: "center", padding: 30, flex: 2 / 3, backgroundColor: "rgba(255, 255, 255, 0.27)", borderTopStartRadius: 30, borderTopEndRadius: 30}}>
                <Input icon={false} font="Sora_400Regular" placeholderr="Insira seu nome: (opcional)" onChangeText={(name)=> setUserName(name)}/>
              <Button title="Login" width={327} font="Sora_600SemiBold" onPress={handleNavigation}/>
            </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default Login;