import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({ onGameStart }) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (inputText) => {
    setUserInput(inputText);
  };

  const resetUserInput = () => {
    setUserInput("");
  };

  const validateInput = () => {
    const userNumber = parseInt(userInput);

    if (isNaN(userNumber) || userNumber > 100 || userNumber <= 0) {
      Alert.alert("Invalid Number!", "Must be a number between 1-100", [
        { text: "Okay", style: "default", onPress: resetUserInput },
      ]);

      return;
    }

    onGameStart(userNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={3}
        keyboardType="numeric"
        value={userInput}
        onChangeText={handleUserInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPress={resetUserInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
          <PrimaryButton onPress={validateInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#510400",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 60,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  singleButtonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
