import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import Instruction from "../components/Instruction";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import generateRandomNumber from "../utils/generateRandomNumber";
import Colors from "../utils/colors";
import RoundLogItem from "../components/RoundLogItem";

let min = 1;
let max = 101;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 101, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessingRounds, setGuessingRounds] = useState([initialGuess]);

  const guessingRoundsLength = guessingRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessingRoundsLength);
    }
  }, [currentGuess, onGameOver, userNumber]);

  useEffect(() => {
    (min = 1), (max = 101);
  }, []);

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
    setGuessingRounds((prevState) => [newRandomNum, ...prevState]);
  };

  return (
    <View style={styles.screen}>
      <Title>Computer's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction style={styles.instructionText}>
          Higher or Lower?
        </Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNewGuess.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={Colors.secondary} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleNewGuess.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color={Colors.secondary} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessingRounds}
          renderItem={(itemData) => (
            <RoundLogItem
              roundNumber={guessingRoundsLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
