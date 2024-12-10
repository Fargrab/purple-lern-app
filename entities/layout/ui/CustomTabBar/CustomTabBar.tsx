import { StyleSheet, Text, View } from "react-native";
import { Colors, Gap } from "../../../../shared/tokens";
import HomeIcon from "../../../../shared/svg/icons/home";
import OrderIcon from "../../../../shared/svg/icons/order";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/src/types";
import { CustomTab } from "../../../../features/layout/ui/CustomTab/CustomTab";

const TABS = [
  { text: "Главная", icon: HomeIcon, path: "catalog" },
  { text: "Заказ", icon: OrderIcon, path: "order" },
];

export default function CustomTabBar(props: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      <View style={styles.inner}>
        {TABS.map((tab, index) => (
          <CustomTab key={`tab_${index}`} tab={props} {...tab} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: "100%",
    height: 99,
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingHorizontal: 30,
    paddingTop: 16,
    paddingBottom: 37,
  },
  inner: {
    flex: 1,
    flexDirection: "row",
    gap: 1,
    backgroundColor: "#dedede",
  },
});
