import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, deleteItem, id }) {
  const deleteHandler = (id) => {
    deleteItem(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "pink" }}
        onPress={() => deleteHandler(id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "purple",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
