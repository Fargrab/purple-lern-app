import { ProductCard } from "./product-card";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors, Gap } from "../../../../shared/tokens";
import { useAtom, useAtomValue } from "jotai";
import { getCatalogAtom } from "../model/product.state";
import { filterAtom } from "../../filters/model/filters.state";
import { searchAtom } from "../../search/model/search.state";
import { useEffect } from "react";

export const Products = () => {
  const [{ products, isLoading }, getCatalogData] = useAtom(getCatalogAtom);
  const filter = useAtomValue(filterAtom);
  const searchQuery = useAtomValue(searchAtom);

  useEffect(() => {
    const params = {
      ...filter,
      ...searchQuery,
    };
    getCatalogData(params);
  }, [filter, searchQuery]);

  return (
    <View
      style={[
        styles.container,
        (isLoading || !products || products.length === 0) && styles.centered,
      ]}
    >
      {!isLoading && products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <ActivityIndicator
          size={"large"}
          color={Colors.primary}
          style={styles.activity}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 24,
    gap: Gap.g16,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  activity: {
    marginTop: 200,
  },
});
