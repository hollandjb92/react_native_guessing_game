import { StyleSheet, View, useWindowDimensions } from "react-native";
import Colors from "../utils/colors";

const Card = ({ children }) => {
  const { width } = useWindowDimensions();

  const marginTop = width < 400 ? 18 : 36;

  return <View style={[styles.card, { marginTop }]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary2,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
