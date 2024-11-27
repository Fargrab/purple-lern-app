import {
  Animated,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, Fonts, FontSize, Gap } from "../shared/tokens";
import Button from "../shared/Button/Button";
import { useEffect } from "react";
import { Link } from "expo-router";

export default function App() {
  const animatedValue = new Animated.Value(-76);
  const opacity = animatedValue.interpolate({
    inputRange: [-76, 0],
    outputRange: [0, 1],
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/coffe_cup.png")}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.contentStack}>
          <View style={styles.textStack}>
            <Animated.Text
              style={{
                ...styles.headingText,
                transform: [{ translateY: animatedValue }],
                opacity: opacity,
              }}
            >
              Одно из самых вкусных кофе в городе!
            </Animated.Text>
            <Text style={styles.descriptionText}>
              Свежие зёрна, настоящая арабика и бережная обжарка
            </Text>
          </View>
          <Button text={"Начать"} />
          {/*TODO::Потом удалить. Временная ссылка для пеходов*/}
          <Link
            href={"/catalog"}
            style={{
              color: Colors.white,
              fontSize: FontSize.f34,
              textAlign: "center",
            }}
          >
            В каталог
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backgroundImage: {
    height: "70%",
  },
  contentStack: {
    backgroundColor: Colors.black,
    justifyContent: "flex-end",
    gap: Gap.g24,
    paddingHorizontal: 30,
    paddingTop: 52,
    paddingBottom: Platform.OS === "ios" ? 43 : 25,
  },
  textStack: {
    alignItems: "center",
    gap: Gap.g8,
  },
  headingText: {
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.f34,
    textAlign: "center",
    color: Colors.white,
    letterSpacing: 0.7,
  },
  descriptionText: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.f14,
    textAlign: "center",
    color: Colors.gray,
    maxWidth: 300,
    letterSpacing: 0.7,
  },
});
