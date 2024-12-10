import { SplashScreen, Stack } from "expo-router";
import { Colors } from "../shared/tokens";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { setJSExceptionHandler } from "react-native-exception-handler";
import { Alert } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Sora: require("../assets/fonts/Sora-Regular.ttf"),
    SoraSemiBold: require("../assets/fonts/Sora-SemiBold.ttf"),
  });

  useEffect(() => {
    const errorHandler = (error, isFatal) => {
      if (isFatal) {
        Alert.alert(
          "Критическая ошибка",
          "Что-то пошло не так. Перезапустите приложение.",
          [{ text: "Закрыть", onPress: () => console.log("App will exit") }],
        );
      } else {
        console.warn("Non-Fatal Error:", error);
      }
    };

    setJSExceptionHandler(errorHandler, true);
  }, []);

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
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/*<Stack.Screen
          name={"catalog"}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={"cart"} />
        <Stack.Screen name={"addresses"} />
        <Stack.Screen name={"success"} />*/}
      </Stack>
    </>
  );
}
