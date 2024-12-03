import { SplashScreen, Stack } from "expo-router";
import { Colors } from "../shared/tokens";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const inset = useSafeAreaInsets();
  const [loaded] = useFonts({
    Sora: require("../assets/fonts/Sora-Regular.ttf"),
    SoraSemiBold: require("../assets/fonts/Sora-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style={"light"} />
      <Stack
        screenOption={{
          contentStyle: {
            backgroundColor: Colors.black,
          },
        }}
      >
        <Stack.Screen
          name={"index"}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"catalog"}
          options={{
            headerShown: false,
            contentStyle: {
              paddingTop: Platform.OS === "android" ? inset.top : 0,
            },
          }}
        />
        <Stack.Screen name={"cart"} />
        <Stack.Screen name={"addresses"} />
        <Stack.Screen name={"success"} />
      </Stack>
    </>
  );
}
