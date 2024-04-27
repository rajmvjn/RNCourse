import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput({ inputHandler, addGoalHandler, val }) {
  return (
    <View style={styles.inputCntr}>
      <TextInput
        placeholder="Your goal"
        style={styles.inputStyle}
        onChangeText={inputHandler}
        value={val}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputCntr: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10,
    flex: 1,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "gray",
    width: "60%",
    padding: 5,
  },
});
