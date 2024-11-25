import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleDeleteItem = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };
  const handleSubmit = (task) => {
    setTasks((prev) => [{ title: task, id: Math.random() }, ...prev]);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button
          onPress={() => setShowModal(true)}
          title="Add New Goal?"
          color={"#5e0acc"}
        />
        {showModal && (
          <GoalInput
            showModal={showModal}
            addGoalHandler={handleSubmit}
            closeModalHandler={closeModalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={tasks}
            renderItem={(item, i) => (
              <GoalItem item={item.item} handleDeleteItem={handleDeleteItem} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
