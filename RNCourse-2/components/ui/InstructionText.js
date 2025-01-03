import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.yellow500,
    fontSize: 24,
  },
});
