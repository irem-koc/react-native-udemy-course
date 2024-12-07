import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary700,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.25,
  },
});
