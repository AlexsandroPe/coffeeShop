import { useFonts } from "@expo-google-fonts/sora"
import { Sora_400Regular, Sora_600SemiBold, Sora_300Light } from "@expo-google-fonts/sora"
function useLoadFonts() {
    const [fontsLoaded] = useFonts({
        Sora_400Regular,
        Sora_600SemiBold,
        Sora_300Light
    })
    return fontsLoaded;
}

export default useLoadFonts;