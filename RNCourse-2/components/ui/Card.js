import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
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
});
export default Card;
