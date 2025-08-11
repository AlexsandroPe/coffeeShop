import { Text, Pressable, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Sora_600SemiBold } from "@expo-google-fonts/sora";

function CategoriesButton({ title, isActive, onPress }) {
  const [fontsLoaded] = useFonts({
    Sora_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Pressable 
      onPress={onPress} 
      style={isActive ? styles.active : styles.btn}
    > 
      <Text style={[styles.text, { color: isActive ? "#FFFFFF" : "#313131" }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 110, 
    height: 29, 
    paddingVertical: 4, 
    paddingHorizontal: 8, 
    backgroundColor: "#f5f5f5", 
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    fontFamily: "Sora_600SemiBold", 
    textAlign: "center"
  },
  active: {
    backgroundColor: "#C67C4E", 
    width: 100, 
    height: 29, 
    paddingVertical: 4, 
    paddingHorizontal: 8, 
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesButton;
