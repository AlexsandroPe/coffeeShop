import {Dimensions, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input"; 
import { LinearGradient } from "expo-linear-gradient";

const {width, height} = Dimensions.get('screen');
console.log(width, height)
function Home() {
    return (
        <SafeAreaView style={{flex: 1}}>
                <LinearGradient
                  colors={['#111111ff', '#111111ff',  '#111111ff', '#313131']}
                    locations={[0, 0, 0, 1]}
                    start={{ x: 0.9, y: 0.2 }}
                    end={{ x:0.1, y: 0.8 }}
                    style={{height: 375, }}    
                >
                <Input />

                </LinearGradient>
        </SafeAreaView>
    )
}


export default Home;