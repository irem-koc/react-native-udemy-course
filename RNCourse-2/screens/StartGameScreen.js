import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const StartGameScreen = () => {
  const [number, setNumber] = useState();
  const onChangeNumber = (e) => {
    setNumber(e.preventDefault);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your prediction"
        keyboardType="numeric"
      />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  input: {},
});
