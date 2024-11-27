import { Text, View } from "react-native";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";

export default function Success() {
  return (
    <>
      <StatusBar style="dark" backgroundColor={Colors.white} />
      <View>
        <Text>Это страница удачного заказа</Text>
      </View>
    </>
  );
}
