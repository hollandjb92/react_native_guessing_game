import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import Instruction from "../components/Instruction";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../utils/colors";

const StartGameScreen = ({ onGameStart }) => {
  const [userInput, setUserInput] = useState("");

  const { height } = useWindowDimensions();

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

  const marginTop = height < 375 ? 30 : 100;

  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior="position">
        <View style={[styles.screenContainer, { marginTop }]}>
          <Title>Guess Your Number</Title>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
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
    alignItems: "center",
  },
  instructionText: {
    textAlign: "center",
  },
});

export default StartGameScreen;
