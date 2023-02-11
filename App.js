import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.screen} colors={["#820000", "#ddb52f"]}>
      <ImageBackground
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/background.png")}
      >
        <StartGameScreen />
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
