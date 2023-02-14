import {
  Image,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../utils/colors";

const GameOverScreen = ({ numRounds, userNumber, onRestart }) => {
  const { width } = useWindowDimensions();

  const widthAndHeight = width < 375 ? 150 : 300;
  const borderRadius = width < 375 ? 75 : 150;
  return (
    <View style={styles.screenContainer}>
      <Title>GAME OVER!</Title>
      <View
        style={[
          styles.imageContainer,
          { width: widthAndHeight, height: widthAndHeight, borderRadius },
        ]}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/foreground.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{numRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>!
      </Text>
      <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary3,
  },
});

export default GameOverScreen;
