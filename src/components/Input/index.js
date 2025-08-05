

import { TextInput, View} from "react-native";

import {Search} from "lucide-react-native"
function Input({placeholderr, icon})  {
    return (
        <View>
            {icon ? <Search size={28} color={"white"}/> : null}
            <TextInput placeholder={placeholderr} style={{ height: 60, width: "330", borderRadius: 10, backgroundColor: "#2A2A2A", paddingHorizontal: 8, paddingVertical: 16, color: "#ffff"}} placeholderTextColor={"#A2A2A2"} />
        </View>
    )
}

export default Input;