import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import generateRandomNumber from "../utils/generateRandomNumber";

let min = 1;
let max = 101;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 101, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, onGameOver, userNumber]);

  const handleNewGuess = (higherOrLower) => {
    if (
      (higherOrLower === "lower" && currentGuess < userNumber) ||
      (higherOrLower === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("We know you're lying....", "Play fair!", [
        { text: "I'm Sorry", style: "cancel" },
      ]);
      return;
    }
    if (higherOrLower === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    const newRandomNum = generateRandomNumber(min, max, currentGuess);
    setCurrentGuess(newRandomNum);
  };

  return (
    <View style={styles.screen}>
      <Title>Computer's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={handleNewGuess.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={handleNewGuess.bind(this, "higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
