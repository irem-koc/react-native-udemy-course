import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ addGoalHandler, showModal, closeModalHandler }) => {
  const [task, setTask] = useState("");

  const goalHandler = (task) => {
    setTask(task);
  };
  const onAddGoalHandler = () => {
    addGoalHandler(task);
    setTask("");
    closeModalHandler();
  };
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!"
          value={task}
          onChangeText={goalHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={closeModalHandler}
              color="#6c757d"
            />
          </View>
          <View style={styles.button}>
            <Button title="Submit" onPress={onAddGoalHandler} color="#28a745" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ea7777",
  },
  textInput: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    borderWidth: 1,
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
