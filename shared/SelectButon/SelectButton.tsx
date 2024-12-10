import {
  Pressable,
  PressableProps,
  StyleSheet,
  GestureResponderEvent,
  Animated,
  Platform,
} from "react-native";
import { Colors, Fonts, FontSize, Radius } from "../tokens";
import { useEffect } from "react";

const Button = ({
  text,
  selected,
  style,
  ...props
}: PressableProps & {
  text: string;
  selected: boolean;
}) => {
  const animatedValue = new Animated.Value(selected ? 0 : 100);
  const bgColor = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primary, Colors.white],
  });
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.white, Colors.radioButtonText],
  });

  return (
    <Pressable {...props}>
      <Animated.View
        style={{
          ...styles.button,
          backgroundColor: bgColor,
          ...style,
        }}
      >
        <Animated.Text
          style={{
            ...styles.text,
            fontFamily: !selected ? Fonts.regular : Fonts.semiBold,
            color: color,
          }}
        >
          {text}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    borderRadius: Radius.r12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: FontSize.f14,
    ...(Platform.OS === "android" && { paddingBottom: 2 }),
  },
});
