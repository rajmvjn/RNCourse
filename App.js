import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [eT, setET] = useState("");
  const [goals, setGoals] = useState([]);

  function inputHandler(eT) {
    setET(eT);
  }

  function addGoalHandler() {
    setGoals((cG) => [...cG, eT]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputCntr}>
        <TextInput
          placeholder="Your goal"
          style={styles.inputStyle}
          onChangeText={inputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.listCntr}>
        {/* <Text>List of goals..</Text> */}
        {goals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
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
  listCntr: {
    flex: 4,
  },
});
