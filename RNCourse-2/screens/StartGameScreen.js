import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

const StartGameScreen = ({ onPick }) => {
  const [number, setNumber] = useState();
  const onChangeNumber = (text) => {
    setNumber(text);
  };
  const resetHandler = () => {
    setNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Helloo", "Number has to be a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    onPick(chosenNumber);
  };
  return (
    <View>
      <Title>Guess my number!</Title>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={number}
          onChangeText={onChangeNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary500,
    borderRadius: 16,
    elevation: 4, //for android
    // for ios
    shadowColor: "black",
    shadowOffset: { width: 6, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow500,
    borderBottomWidth: 2,
    color: Colors.yellow500,
    marginVertical: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: "auto",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
