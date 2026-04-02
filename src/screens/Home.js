import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import colours from "../constants/Colours";
import ListItems from "../components/ListItems";
import Title from "../components/Title";
import AddButton from "../components/AddButton";
import { loadTodos, saveTodos } from "../utils/storage";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();
  const focusedIs = useIsFocused();

  useEffect(() => {
    const getTodos = async () => {
      const data = await loadTodos();
      setTodos(data);
    };
    getTodos();
  }, [focusedIs]);

  const toggleFinish = async (id) => {
    const updated = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } :item
    );
    setTodos(updated);
    await saveTodos(updated);
  };

  const deleteTodo = async (id) => {
    const updated = todos.filter((item) => item.id !== id);
    setTodos(updated);
    await saveTodos(updated);
  };

  return (
    <View style={styles.homeContainer}>
      <Title>My Todo List</Title>
      <View style={styles.lineDivider} />
      <FlatList data={todos} keyExtractor={(item) => item.id} renderItem={({ item }) => (
        <ListItems item={item} onDelete={deleteTodo} onToggleComplete={toggleFinish} />)} />
      <View style={styles.lineDivider} />
      <AddButton buttonName="Add New Todo" onPress={() => navigation.navigate("NewTodoScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colours.mainBackground,
    padding: 20,
  },
  lineDivider: {
    height: 1,
    backgroundColor: colours.divider,
    marginVertical: 10,
  },
});