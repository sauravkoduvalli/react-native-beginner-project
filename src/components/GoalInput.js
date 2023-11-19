import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";

const screenSize = Dimensions.get("screen");

function GoalInput(props) {
  const [goalInput, setGoalInput] = useState("");

  function goalInputHandler(input) {
    setGoalInput(input);
  }

  function addGoalHandler() {
    props.onAddGoal(goalInput);
    setGoalInput("");
  }

  return (
    <Modal style={styles.model} visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add New Goal"
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color={"purple"}
              onPress={goalInput.length > 0 ? addGoalHandler : null}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={"purple"}
              onPress={props.cancelHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#311b6b",
    justifyContent: 'center',
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 2,
    marginBottom: 16,
    padding: 8,
    // borderRadius: 16,
    backgroundColor: 'white'
    
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
    backgroundColor: "purple",
  },
});

export default GoalInput;
