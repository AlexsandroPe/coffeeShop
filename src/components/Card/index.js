import { PlusSquare, Plus, PlusCircle } from "lucide-react-native"
import { View, Text, ImageBackground, StyleSheet} from "react-native"


function CardCoffe({title, price, description, category, url},) {

    return (
        <View style={styles.card}>
            <ImageBackground style={{height: 128}} imageStyle={{borderRadius: 12}} source={url}>

            </ImageBackground>
            <View style={styles.detail}>
                <View style={styles.text}>
                    <Text style={{fontFamily: "Sora_600SemiBold", fontSize: 16}}>{title}</Text>
                    <Text style={{color: "#a2a2a2"}}>{category}</Text>
                </View>
                <View style={styles.buttonAddItem}>
                    <Text style={styles.price}>{price}</Text>
                    <Plus  size={32} style={styles.icon}  color="white"/>
                </View>
            </View>
        </View>
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