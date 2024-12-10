import { Tabs } from "expo-router";
import HomeIcon from "../../shared/svg/icons/home";
import OrderIcon from "../../shared/svg/icons/order";
import CustomTabBar from "../../entities/layout/ui/CustomTabBar/CustomTabBar";
import { StatusBar } from "expo-status-bar";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={({ navigation }) => ({})}
      >
        <Tabs.Screen
          name={"catalog"}
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name={"order"}
          options={{
            headerTitle: "Заказы",
            headerShown: true,
          }}
        />
      </Tabs>
    </>
  );
}
