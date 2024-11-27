import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Colors } from "../../shared/tokens";
import { StatusBar } from "expo-status-bar";

export default function CatalogItem() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <StatusBar style="dark" backgroundColor={Colors.white} />
      <View style={{ backgroundColor: Colors.white }}>
        <Text>Это продукт с id: {id}</Text>
      </View>
    </>
  );
}
