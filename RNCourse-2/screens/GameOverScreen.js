import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title"; //react native automatically pick the proper file based on the system
import Colors from "../constants/colors"; //not for only components also constants!

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width > 480) {
    imageSize = 100;
  } else {
    imageSize = 300;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imagestyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageContainer, imagestyle]}>
          <Image
            style={styles.image}
            source={require("./../assets/success.webp")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
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
    marginVertical: 24,
  },
  highlightText: { fontFamily: "open-sans-bold", color: Colors.yellow500 },
});
