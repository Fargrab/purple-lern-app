import SelectButton from "../../../../shared/SelectButon/SelectButton";
import { Platform, StyleSheet, View } from "react-native";
import { Colors, Gap } from "../../../../shared/tokens";
import { useAtom } from "jotai";
import { changeFilterAtom } from "../model/filters.state";
import { MockFilters } from "../model/filters";
import { useEffect } from "react";

export const CatalogFilters = () => {
  const [{ filter }, setFilter] = useAtom(changeFilterAtom);

  const onSetFilter = (value) => {
    if (value !== filter) {
      setFilter(value);
    }
  };

  return (
    <View style={styles.container}>
      <SelectButton
        key={"filter_all"}
        text={"Все"}
        selected={filter === null}
        onPress={() => onSetFilter(null)}
      />
      {MockFilters.map((item, index) => (
        <SelectButton
          key={`filter_${item.slug}`}
          text={item.title}
          selected={filter === item.slug}
          onPress={() => onSetFilter(item.slug)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: Gap.g8,
  },
  radioButtonText: {
    color: Colors.radioButtonText,
    ...(Platform.OS === "android" && { paddingBottom: 2 }),
  },
});
