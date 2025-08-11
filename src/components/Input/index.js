

import { TextInput, View} from "react-native";

import {Search} from "lucide-react-native"
function Input({placeholderr, icon, ...rest})  {
    return (
        <View style={{  height: 60, width: "330", borderRadius: 10, backgroundColor: "#2f2f2fff", paddingHorizontal: 8,flexDirection: "row", alignItems: "center", gap: 10}}>
            {icon ? <Search size={28} color={"white"}/> : null}
            <TextInput {...rest} cursorColor={"#d4cdcdff"} placeholder={placeholderr} style={{flex: 1,color: "#ffff"}} placeholderTextColor={"#A2A2A2"} />
        </View>
    )
}

export default Input;