import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, handleDeleteItem }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ddd" }}
      onPress={() => handleDeleteItem(item.id)}
      style={({ pressed }) => [pressed && styles.press]}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
  press: {
    opacity: 0.5,
  },
});
