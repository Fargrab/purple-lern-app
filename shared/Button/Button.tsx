import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  GestureResponderEvent,
  Animated,
} from "react-native";
import { Colors, Fonts, FontSize, Radius } from "../tokens";
import { ReactNode } from "react";

const Button = ({
  text,
  icon,
  style,
  ...props
}: PressableProps & {
  text?: string;
  icon?: ReactNode;
}) => {
  const animatedValue = new Animated.Value(100);
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary],
  });

  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    if (props.onPressIn) {
      props.onPressIn(e);
    }
  };

  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 300,
      useNativeDriver: true,
    }).start();

    if (props.onPressOut) {
      props.onPressOut(e);
    }
  };

  return (
    <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={{
          ...styles.button,
          backgroundColor: color,
          ...style,
        }}
      >
        {icon && icon}
        {text && <Text style={styles.text}>{text}</Text>}
      </Animated.View>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    height: 62,
    borderRadius: Radius.r16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: Fonts.semiBold,
    textAlign: "center",
    color: Colors.white,
    fontSize: FontSize.f16,
    letterSpacing: 0.7,
  },
});
