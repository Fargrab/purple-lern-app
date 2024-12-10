import { Text, View, Pressable, StyleSheet } from "react-native";
import { Colors, Fonts, FontSize, Gap } from "../../../../shared/tokens";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { useState, JSX } from "react";

interface ICustomTab {
  tab: BottomTabBarProps;
  text: string;
  icon: JSX.Element;
  path: string;
}

export function CustomTab({ tab, text, icon, path }: ICustomTab & Pressable) {
  const [clicked, setClicked] = useState<boolean>(false);
  const isActive = tab.state.routes[tab.state.index].name === path;
  const Icon = icon;
  return (
    <Pressable
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      onPress={() => tab.navigation.navigate(path)}
      style={styles.container}
    >
      <View style={styles.tab}>
        <View style={styles.iconWrap}>
          <Icon
            fill={clicked || isActive ? Colors.primary : Colors.grayTabIcon}
          />
          {isActive && <View style={styles.activeIndicator} />}
        </View>

        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    gap: Gap.g8,
  },
  iconWrap: {
    position: "relative",
  },
  activeIndicator: {
    borderRadius: 18,
    width: 10,
    height: 5,
    backgroundColor: Colors.primary,
    position: "absolute",
    bottom: -10,
    left: 7,
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.f14,
    color: Colors.productSubNameColor,
  },
});
