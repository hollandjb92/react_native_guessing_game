import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (chosenNumber) => {
    setUserNumber(chosenNumber);
  };

  let screen = <StartGameScreen onGameStart={handleStartGame} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient style={styles.screen} colors={["#820000", "#ddb52f"]}>
      <ImageBackground
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
