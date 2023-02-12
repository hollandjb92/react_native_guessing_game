import { StyleSheet, Text } from "react-native";
import Colors from "../utils/colors";

const Instruction = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary,
    fontSize: 24,
  },
});

export default Instruction;
