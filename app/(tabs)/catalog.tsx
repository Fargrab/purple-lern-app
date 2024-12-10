import { Text, View, StyleSheet } from "react-native";
import { Colors, Fonts, FontSize, Gap } from "../../shared/tokens";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchCatalog } from "../../entities/catalog/search/ui/search";
import { CatalogFilters } from "../../entities/catalog/filters/ui/filters";
import { Products } from "../../entities/catalog/products/ui/products";
import { StatusBar } from "expo-status-bar";

export default function Catalog() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style={"light"} />
      <View style={styles.container}>
        <View
          style={{
            ...styles.topView,
            marginTop: insets.top,
          }}
        >
          <View style={styles.address}>
            <Text style={styles.addressTitle}>Адрес</Text>
            <Text style={styles.addressValue}>Москва, Новослободская 23</Text>
          </View>
          <SearchCatalog />
        </View>
        <View style={styles.contentBlock}>
          <CatalogFilters />
          <Products />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  topView: {
    paddingHorizontal: 30,
    paddingTop: 19,
    paddingBottom: 34,
    gap: Gap.g28,
  },
  address: {
    gap: Gap.g4,
  },
  addressTitle: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.f12,
    color: Colors.gray,
  },
  addressValue: {
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.f14,
    color: Colors.lightGray,
  },
  contentBlock: {
    flex: 1,
    backgroundColor: Colors.darkenedWhite,
    paddingHorizontal: 30,
    paddingTop: 28,
  },
});
