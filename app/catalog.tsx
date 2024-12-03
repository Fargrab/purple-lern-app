import { Text, SafeAreaView, View } from "react-native";
import { Colors, FontSize } from "../shared/tokens";
import { Link } from "expo-router";

export default function Catalog() {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.black }}>
      <Text
        style={{
          color: Colors.white,
          textAlign: "center",
          fontSize: FontSize.f34,
        }}
      >
        Catalog
      </Text>
      {/*TODO: Потом удалить. Временные ссылки для перходов*/}
      <View style={{ backgroundColor: Colors.white }}>
        <Link
          href={"/catalog/34543"}
          style={{
            color: Colors.primary,
            fontSize: FontSize.f16,
            marginVertical: 30,
            textAlign: "center",
          }}
        >
          Страница товара
        </Link>
        <Link
          href={"/cart"}
          style={{
            color: Colors.primary,
            fontSize: FontSize.f16,
            marginVertical: 30,
            textAlign: "center",
          }}
        >
          Корзина
        </Link>
        <Link
          href={"/addresses"}
          style={{
            color: Colors.primary,
            fontSize: FontSize.f16,
            marginVertical: 30,
            textAlign: "center",
          }}
        >
          Адрес
        </Link>
      </View>
    </SafeAreaView>
  );
}
