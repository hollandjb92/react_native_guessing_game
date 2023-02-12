import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const handleStartGame = (chosenNumber) => {
    setUserNumber(chosenNumber);
    setGameIsOver(false);
  };

  const handleGameOver = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onGameStart={handleStartGame} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      style={styles.screen}
      colors={[Colors.primary3, Colors.secondary]}
    >
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
