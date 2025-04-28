import { SplashScreen, Stack } from "expo-router";
import './globals.css';
import { useFonts} from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded]=useFonts({"Poppins-Black":require("./assets/fonts/Poppins-Black.ttf"),});




  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return <Stack screenOptions={{headerShown:false}}/>;
}














  