import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Colors from "../utils/colors";

const NumberContainer = ({ children }) => {
  const { width } = useWindowDimensions();

  const marginAndPadding = width < 400 ? 12 : 24;
  const fontSize = width < 400 ? 28 : 36;
  return (
    <View
      style={[
        styles.container,
        { margin: marginAndPadding, padding: marginAndPadding },
      ]}
    >
      <Text style={[styles.text, { fontSize }]}>{children}</Text>
    </View>
  );
};

// window is Android screen minus status bar, screen is with status bar. No difference on iOS
// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    color: Colors.secondary,
  },
});

export default NumberContainer;
