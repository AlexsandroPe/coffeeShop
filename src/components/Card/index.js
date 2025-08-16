import {Plus, ShoppingBag } from "lucide-react-native"
import { View, Text, ImageBackground, StyleSheet, Pressable} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react";

import Animated from "react-native-reanimated";

function CardCoffe({title, price, description, category, url},) {
    const [isAdded, setIsAdded] = useState();
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Details", {
            title, 
            description, 
            price,
            url
        });
    }
    return (
        <Pressable  onPress={handlePress} style={styles.card}>
            <ImageBackground style={{height: 128}} imageStyle={{borderRadius: 12}} source={url}>
            </ImageBackground>
            <View  style={styles.detail}>
                <View style={styles.text}>
                    <Text style={{fontFamily: "Sora_600SemiBold", fontSize: 16}}>{title}</Text>
                    <Text style={{color: "#a2a2a2"}}>{category}</Text>
                </View>
                <View style={styles.buttonAddItem}>
                    <Text style={styles.price}>{price}</Text>
                    {isAdded ? <ShoppingBag onPress={() => setIsAdded(!true)}  size={32}   color="black"/> :  <Plus onPress={() => setIsAdded(true)}  size={32} style={styles.icon}  color="white"/> }
                   
                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    card: {
      width: 156, borderRadius: 16, height: 238, backgroundColor: "#fff", overflow: 'hidden', paddingHorizontal: 8, paddingBottom: 12, paddingTop: 8
    },

    detail: {
        gap: 8
    },
    text: {

    },
    buttonAddItem: {
        flexDirection: "row",
        gap: 32,
        alignItems: "center"
    },
    price: {
        flex: 1
    },
    icon: {
        backgroundColor: "#C67C4E", borderRadius: 8 
    }

})
export default CardCoffe

{/* <Pressable onPress={handlePress} style={styles.card}>
            <ImageBackground style={{height: 128}} imageStyle={{borderRadius: 12}} source={url}>
            </ImageBackground>
            <View style={styles.detail}>
                <View style={styles.text}>
                    <Text style={{fontFamily: "Sora_600SemiBold", fontSize: 16}}>{title}</Text>
                    <Text style={{color: "#a2a2a2"}}>{category}</Text>
                </View>
                <View style={styles.buttonAddItem}>
                    <Text style={styles.price}>{price}</Text>
                    
                    {isAdded ? <ShoppingBag onPress={() => setIsAdded(!true)}  size={32}   color="black"/> :  <Plus onPress={() => setIsAdded(true)}  size={32} style={styles.icon}  color="white"/> }
                   
                </View>
            </View>
        </Pressable> */}