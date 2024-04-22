import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [eT, setET] = useState("");
  const [goals, setGoals] = useState([]);

  function inputHandler(eT) {
    setET(eT);
  }

  function addGoalHandler() {
    setGoals((cG) => [...cG, { text: eT, id: Math.random().toString() }]);
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
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
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
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "purple",
  },
  goalText: {
    color: "white",
  },
});
