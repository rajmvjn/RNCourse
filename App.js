import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [eT, setET] = useState("");
  const [goals, setGoals] = useState([]);

  function inputHandler(eT) {
    setET(eT);
  }

  function addGoalHandler() {
    setGoals((cG) => [...cG, { text: eT, id: Math.random().toString() }]);
    setET("");
  }

  function deleteItemHandler(id) {
    setGoals((cG) => cG.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        inputHandler={inputHandler}
        addGoalHandler={addGoalHandler}
        val={eT}
      />
      <View style={styles.listCntr}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              deleteItem={deleteItemHandler}
              id={itemData.item.id}
            />
          )}
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
  listCntr: {
    flex: 4,
  },
});
