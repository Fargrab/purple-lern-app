import { Text, View } from "react-native";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";

export default function Addresses() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={{ backgroundColor: Colors.white }}>
        <Text>Это страница Адресов</Text>
      </View>
    </>
  );
}
