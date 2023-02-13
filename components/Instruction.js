import { StyleSheet, Text } from "react-native";
import Colors from "../utils/colors";

const Instruction = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.secondary,
    fontSize: 24,
  },
});

export default Instruction;
