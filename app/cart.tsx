import { Text, View } from "react-native";
import { Colors, FontSize } from "../shared/tokens";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Cart() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={{ backgroundColor: Colors.white }}>
        <Text style={{ textAlign: "center", fontSize: FontSize.f34 }}>
          Это страница корзины
        </Text>
        <Link
          href={"/success"}
          style={{
            color: Colors.primary,
            fontSize: FontSize.f16,
            marginVertical: 30,
            textAlign: "center",
          }}
        >
          Заказать
        </Link>
      </View>
    </>
  );
}
