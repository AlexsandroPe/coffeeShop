import { View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input"; 

function Home() {
    return (
        <SafeAreaView style={{flex: 1}} edges={["left"]}>
            <View style={{backgroundColor: "#2A2A33", height: 280, width: 375}}>
                <Input icon={true} placeholderr={"Serch coffe"} />
            </View>
        </SafeAreaView>
    )
}


export default Home;