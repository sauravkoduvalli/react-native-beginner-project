import { StyleSheet, View, FlatList, Button, SafeAreaView } from "react-native";
import { useState } from "react";
import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState([]);
  const [isModalVIaible, setModalVisible] = useState(false);

  function addGoalHandler(goalInput) {
    setGoal((currentGoal) => [
      ...currentGoal,
      { text: goalInput, id: Math.random().toString() },
    ]);
    modalHideHandler();
  }

  function modalVisibleHandler() {
    setModalVisible(true);
  }
  function modalHideHandler() {
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* section for adding goal - textinput and a button */}
      <Button
        title="ADD NEW GOAL"
        color={"purple"}
        onPress={modalVisibleHandler}
      />
      {isModalVIaible && (
        <GoalInput
          isModalVIaible={isModalVIaible}
          onAddGoal={addGoalHandler}
          cancelHandler={modalHideHandler}
        />
      )}
      {/* section to list the goals */}
      <View style={styles.goalListWrapper}>
        <FlatList
          data={goal}
          renderItem={(item) => (
            <GoalItem
              id={item.item.id}
              text={item.item.text}
              onDeleteItem={deleteGoalHandler}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 16,
    // paddingTop: 40,
    justifyContent: "center",
  },

  goalListWrapper: {
    flex: 5,
    paddingVertical: 24,
  },
});
