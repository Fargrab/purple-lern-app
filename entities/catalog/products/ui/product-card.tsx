import { IProduct } from "../model/product.interfaces";
import { Colors, Fonts, FontSize, Gap } from "../../../../shared/tokens";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Star from "../../../../shared/svg/icons/star";
import Button from "../../../../shared/Button/Button";
import Plus from "../../../../shared/svg/icons/plus";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ ...styles.card, width: (width - 60 - Gap.g16) / 2 }}>
      <View style={styles.top}>
        <Image
          source={{ uri: product.image }}
          resizeMode={"cover"}
          style={styles.image}
        />
        <View style={styles.ratingWrap}>
          <Star />
          <Text style={styles.ratingText}>{product.rating}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.info}>
          <Text style={styles.infoName}>{product.name}</Text>
          <Text style={styles.infoSubTitle}>{product.subTitle}</Text>
        </View>
        <View style={styles.action}>
          <Text style={styles.price}>
            {product.price} {Platform.OS === "android" ? "₽" : "Р"}
          </Text>
          <Button
            icon={<Plus />}
            style={{ width: 32, height: 32, borderRadius: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: Colors.white,
  },
  top: {
    position: "relative",
    marginTop: 4,
    marginHorizontal: 4,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: Colors.lightGray,
    borderRadius: 16,
  },
  ratingWrap: {
    width: 51,
    height: 25,
    alignItems: "center",
    gap: Gap.g2,
    backgroundColor: Colors.bgRating,
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    paddingHorizontal: 8,
    paddingVertical: 3,
    top: 0,
    left: 0,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  ratingText: {
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.f10,
    color: Colors.white,
  },
  bottom: {
    padding: 12,
    gap: Gap.g8,
  },
  info: {
    gap: Gap.g4,
  },
  infoName: {
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.f16,
    color: Colors.productNameColor,
  },
  infoSubTitle: {
    fontFamily: Fonts.regular,
    fontSize: FontSize.f12,
    color: Colors.productSubNameColor,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.f18,
    color: Colors.radioButtonText,
  },
});
