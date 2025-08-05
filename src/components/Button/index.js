import { TouchableOpacity, Text} from "react-native";




function Button({title, ...rest}) {
    return (
        <TouchableOpacity {...rest} style={{backgroundColor: "#C67C4E", width: 327, height: 56, borderRadius: 16, justifyContent: "center"}} activeOpacity={0.5}>
            <Text style={{color: "#FFFFFF", fontSize: 18, textAlign: "center"}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button; 