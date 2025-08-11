import { TouchableOpacity, Text} from "react-native";




function Button({title, font, width,  ...rest}) {
    return (
        <TouchableOpacity  {...rest} style={{backgroundColor: "#C67C4E", width: width, height: 56, borderRadius: 16, justifyContent: "center"}} activeOpacity={0.9}>
            <Text style={{color: "#FFFFFF", fontSize: 18, textAlign: "center", fontFamily: font}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button; 