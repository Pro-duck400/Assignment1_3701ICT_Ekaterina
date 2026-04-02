import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import colours from "../constants/Colours";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import SaveButton from "../components/SaveButton";
import { validateTodo } from "../utils/Validation";
import { loadTodos, saveTodos } from "../utils/Storage";
import Todo from "../models/Todo";

export default function NewTodoScreen({ navigation }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const workSave = async () => {
    const result = validateTodo(todoTitle, todoDescription);
    if (!result.valid) {
      Alert.alert("ERROR", result.message);
      return;
    }

    const newTodo = new Todo(todoTitle, todoDescription);
    try {
      const todos = await loadTodos();
      const updatedTodos = [...todos, newTodo];
      await saveTodos(updatedTodos);
      setTodoTitle("");
      setTodoDescription("");
      Alert.alert("Success", "Todo Added Successfully");
    } catch (error) {
      console.log("Error saving todo:", error);
      Alert.alert("Error", "Failed to save todo.");
    }
  };

  return (
    <View style={styles.container}>
      <Title>Add New Todo</Title>
      <View style={styles.divider} />
      <View style={styles.listContainer}>
        <Text style={styles.textLabel}>Title</Text>
        <TextInput style={styles.titleInput} value={todoTitle} onChangeText={setTodoTitle} />
        <Text style={styles.textLabel}>Description</Text>
        <TextInput style={styles.descriptionInput} value={todoDescription} onChangeText={setTodoDescription} multiline={true} numberOfLines={4} textAlignVertical="top"/>
      </View>
      <View style={styles.buttonRow}>
        <BackButton buttonName="Back" onPress={() => navigation.goBack()} />
        <SaveButton buttonName="Save" onPress={workSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colours.mainBackground,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 60,
  },
  textLabel: {
    fontSize: 18,
    marginBottom: 10
  },
  titleInput: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colours.inputFields,
  },
  descriptionInput: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colours.inputFields,
    minHeight: 80,
  },
  listContainer: {
    flex: 1
  },
  divider: {
    height: 1,
    backgroundColor: colours.divider,
    marginVertical: 10
  },
});