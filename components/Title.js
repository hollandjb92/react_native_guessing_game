import { StyleSheet, Text } from "react-native";
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
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 12,
  },
});

export default Title;
