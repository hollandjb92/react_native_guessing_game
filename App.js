import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [numRounds, setNumRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleStartGame = (chosenNumber) => {
    setUserNumber(chosenNumber);
    setGameIsOver(false);
  };

  const handleGameOver = (rounds) => {
    setGameIsOver(true);
    setNumRounds(rounds);
  };

  const handleRestartGame = () => {
    setUserNumber(null);
    setNumRounds(0);
  };

  let screen = <StartGameScreen onGameStart={handleStartGame} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        onRestart={handleRestartGame}
        numRounds={numRounds}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.screen}
      colors={[Colors.primary3, Colors.secondary]}
      onLayout={onLayout}
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
