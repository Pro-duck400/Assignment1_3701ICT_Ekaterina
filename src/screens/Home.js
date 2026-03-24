import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import ListItems from "../components/ListItems";
import Title from "../components/Title";
import AddButton from "../components/AddButton";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  useEffect(() => {
    loadTodos();
  }, [isFocused]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem("TODOS");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.log("Error loading todos:", error);
    }
  };

  const saveTodos = async (updatedTodos) => {
    try {
      await AsyncStorage.setItem("TODOS", JSON.stringify(updatedTodos));
    } catch (error) {
      console.log("Error saving todos:", error);
    }
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((item) => item.id !== id);
    setTodos(updated);
    saveTodos(updated);
  };

  const toggleComplete = (id) => {
    const updated = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updated);
    saveTodos(updated);
  };

  return (
    <View style={styles.homeContainer}>
      <Title>My Todo List</Title>
      <View style={styles.lineDivider} />
      <FlatList data={todos} keyExtractor={(item) => item.id} renderItem={({ item }) => (
          <ListItems item={item} onDelete={deleteTodo} onToggleComplete={toggleComplete} />
        )}/>
      <View style={styles.lineDivider} />
      <AddButton buttonName="Add New Todo" onPress={() => navigation.navigate("NewTodoScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  lineDivider: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});