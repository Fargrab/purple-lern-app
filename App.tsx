import {
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Colors, FontSize, Gap} from "./shared/tokens";
import Button from "./shared/Button/Button";

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground
          source={require('./assets/coffe_cup.png')}
          style={styles.background}
          imageStyle={styles.backgroundImage}
      >
        <View style={styles.contentStack}>
          <View style={styles.textStack}>
            <Text style={styles.headingText}>Одно из самых вкусных кофе в городе!</Text>
            <Text style={styles.descriptionText}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
          </View>
          <Button text={"Начать"}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    height: '70%',
  },
  contentStack: {
    backgroundColor: Colors.black,
    justifyContent: "flex-end",
    gap: Gap.g24,
    paddingHorizontal: 30,
    paddingTop: 52,
    paddingBottom: 24
  },
  textStack: {
    alignItems: "center",
    gap: Gap.g8
  },
  headingText: {
    fontSize: FontSize.f34,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    color: Colors.white
  },
  descriptionText: {
    fontSize: FontSize.f14,
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "center",
    color: Colors.gray,
    maxWidth: 300
  },
});
