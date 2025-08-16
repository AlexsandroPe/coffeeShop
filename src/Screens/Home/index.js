// Home.js
import {View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Input from "../../components/Input"; 
import { LinearGradient } from "expo-linear-gradient";
import CategoriesButton from "../../components/Categories";
import {categories, coffees} from "../../Data"
import CardCoffe from "../../components/Card";
import useLoadFonts from "../../hooks/useLoadFonts";
import { ChevronRight } from "lucide-react-native";

function Home({ route }) {
	const { userName } = route.params;
	const [activeCategory, setActiveCategory] = useState(0);
	const [clickedBtn, setClickedBtn] = useState("All Coffees");
	
	const fontsLoaded = useLoadFonts()
	if(!fontsLoaded) return null;
	const handleCategoryPress = (btnTitle, index) => {
	  setActiveCategory(index);
	  setClickedBtn(btnTitle);
	};

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <LinearGradient
    	colors={["#111111", "#313131"]}
        locations={[0, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          height: 340, 
          justifyContent: "center", 
          gap: 20, 
          alignItems: "center", 
          backgroundColor: "#fff"
        }}    
      >
        <View>
          <Text style={{ color: "rgba(112, 87, 65, 1)", fontSize: 30, fontFamily: "Sora_600SemiBold " }}>
            Welcome, <Text style={{ color: "#d6d6d6ff", fontSize: 30 }}>{userName}</Text>
          </Text>
        </View>
        <Input icon={true} font={"Sora_400Regular"} placeholderr={"Search Coffee"} />
      </LinearGradient>
    
	<View style={{flex: 1}}>
      	<View style={styles.categoriesContainer}> 
			<FlatList
				data={categories}
				renderItem = {({item, index}) => (
					<CategoriesButton  key={index} title={item} isActive={activeCategory === index} onPress={() => handleCategoryPress(item, index)}/>
				)}
				scrollIndicatorInsets={false}
				showsHorizontalScrollIndicator={false}
				horizontal
				style={{height: 29,}}
				contentContainerStyle={{
				alignItems: "center",
				justifyContent: "center",
				}}
			/>
			<ChevronRight size={20} />
    	</View>
		<View style={styles.coffeesContainer}>
				<FlatList 
				key={"Coffees-grid"}
					data={
						clickedBtn != "All Coffees" ? coffees.filter((coffee) => coffee.category === clickedBtn) : coffees
					}
					renderItem={({item, index}) => (
						<CardCoffe description={item.description} category={item.category} key={item.id} title={item.name} price={item.price} url={item.url}/>
					)}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					columnWrapperStyle={{ justifyContent: "space-evenly"}}
					contentContainerStyle={{ rowGap: 24}}
					keyExtractor={({id}) => id.toString()}
				/>
	  	</View>
	</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	gap: 10,
	paddingHorizontal: 24,
	paddingVertical: 10
  },
  coffeesContainer: {
	flex: 1,
	paddingVertical: 8,
  }
});

export default Home