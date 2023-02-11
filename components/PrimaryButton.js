import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "maroon" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonTextContainer, styles.pressed]
            : styles.buttonTextContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonTextContainer: {
    backgroundColor: "maroon",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
