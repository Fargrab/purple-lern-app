import { Platform, StyleSheet, TextInput, View } from "react-native";
import { Colors, Fonts, FontSize, Gap } from "../../../../shared/tokens";
import SearchIcon from "../../../../shared/svg/icons/search";
import { useSetAtom } from "jotai";
import { changeSearchAtom } from "../model/search.state";

export const SearchCatalog = () => {
  const changeSearch = useSetAtom(changeSearchAtom);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"Найти кофе"}
        placeholderTextColor={Colors.gray}
        onChangeText={(text) => changeSearch(text)}
      />
      <View style={styles.icon}>
        <SearchIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    width: "100%",
    height: 52,
    borderRadius: 16,
    backgroundColor: Colors.darkGray,
    paddingLeft: 48,
    paddingRight: 16,
    color: Colors.lightGray,
    fontFamily: Fonts.regular,
    fontSize: FontSize.f14,
    ...(Platform.OS === "android" && { paddingBottom: 13 }),
  },
  icon: {
    position: "absolute",
    left: 16,
    top: 16,
  },
});
