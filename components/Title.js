import { StyleSheet, Text, Platform } from "react-native";
import Colors from "../utils/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: Colors.secondary,
    fontSize: 24,
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.secondary,
    padding: 12,
  },
});

export default Title;
