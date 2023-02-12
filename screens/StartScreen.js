import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import Card from "../components/Card";
import Instruction from "../components/Instruction";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../utils/colors";

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
    <View style={styles.screenContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instruction style={styles.instructionText}>
          Enter a Number between 1-100
        </Instruction>
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    color: Colors.secondary,
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
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    textAlign: "center",
  },
});

export default StartGameScreen;
