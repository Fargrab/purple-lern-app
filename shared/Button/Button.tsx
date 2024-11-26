import {Pressable, PressableProps, StyleSheet, View, Text} from "react-native";
import {Colors, FontSize, Radius} from "../tokens";

const Button = ({text, ...props}: PressableProps & {text?: string}) => {
    return (
        <Pressable {...props}>
            <View style={styles.button}>
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Pressable>
    )
}
export default Button

const styles = StyleSheet.create({
    button: {
        height: 62,
        borderRadius: Radius.r16,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: Colors.white,
        fontSize: FontSize.f16,
        fontWeight: "600"
    }
})