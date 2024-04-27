import { StyleSheet, View, TextInput, Button, Image } from "react-native";

function GoalInput({ inputHandler, addGoalHandler, val }) {
  return (
    <View style={styles.inputCntr}>
      <Image style={styles.img} source={require("../assets/images/goal.png")} />
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10,
    flex: 2,
    backgroundColor: "pink",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "gray",
    width: "60%",
    padding: 5,
  },
  img: {
    width: 50,
    height: 50,
  },
});
