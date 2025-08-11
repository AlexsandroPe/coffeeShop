import {Dimensions, View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input"; 
import { LinearGradient } from "expo-linear-gradient";
import Categories from "../../components/Categories";

const {width, height} = Dimensions.get('screen');
console.log(width, height)

function Home({route}) {
	const {userName}= route.params;
	return (
		<SafeAreaView style={{flex: 1}} >
			<LinearGradient
				colors={['#111111ff', '#313131']}
				locations={[0, 1]}
				start={{ x: 0.9, y: 0.2 }}
				end={{ x:0.1, y: 0.8 }}
				style={{height: 375, justifyContent: "center", gap: 20, alignItems: "center"}}    
			>
				<View>
					<Text style={{color: "#d6d6d6ff", fontSize: 30}}>Bem vindo, <Text style={{color: "#d6d6d6ff", fontSize: 30}}>{userName}</Text></Text>
				</View>
				<Input icon={true} placeholderr={"Search Coffee"}/>
			</LinearGradient>
		</SafeAreaView>
	)
}


export default Home;