import { FlatList, Button, ScrollView, TouchableOpacity, Pressable } from "react-native";


const categories = ["All coffee", "Machiato", "Latte", "Americano"]


function Categories({width}) {

    return (
        <ScrollView horizontal style={{height: 30, width: width}} contentContainerStyle={{height: 50}}>
            {categories.map((name) => (
                <>
                <Pressable />
                <TouchableOpacity onPress={() => setIsActive} style={{borderRadius: 8}} title={name}/>
                </>
            ))}
        </ScrollView>
    )
}


export default Categories