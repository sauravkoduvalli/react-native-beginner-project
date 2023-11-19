import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View>
      <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalText: {
    textAlign: "center",
    margin: 8,
    padding: 4,
    borderRadius: 13,
    backgroundColor: "purple",
    color: "white",
  },
});

export default GoalItem;
