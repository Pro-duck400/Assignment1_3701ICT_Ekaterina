import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import SaveButton from "../components/SaveButton";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateTodo } from "../utils/Validation";

export default function NewTodoScreen({ navigation }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const manageSave = async () => {
    const result = validateTodo(todoTitle, todoDescription);

    if (!result.valid) {
      Alert.alert("ERROR", result.message);
      return;
    }

    const newTodo = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      title: todoTitle,
      description: todoDescription,
      completed: false,
    };

    try {
      const storedTodos = await AsyncStorage.getItem("TODOS");
      const todos = storedTodos ? JSON.parse(storedTodos) : [];
      const updatedTodos = [...todos, newTodo];

      await AsyncStorage.setItem("TODOS", JSON.stringify(updatedTodos));

      setTodoTitle("");
      setTodoDescription("");
      Alert.alert("Success", "Todo Added Successfully");
    } catch (error) {
      console.log("Error saving todo:", error);
      Alert.alert("Error", "Failed to save todo. Try again.");
    }
  };
  
  return (
    <View style={styles.container}>
      <Title>Add New Todo</Title>
      <View style={styles.divider} />
      <View style={styles.listContainer}>
        <Text style={styles.textLabel}>Title</Text>
        <TextInput style={styles.titleInput} placeholder="Add new todo title" value={todoTitle} onChangeText={setTodoTitle}/>
        <Text style={styles.textLabel}>Description</Text>
        <TextInput style={styles.descriptionInput} placeholder="Add your description" value={todoDescription} onChangeText={setTodoDescription} multiline={true} numberOfLines={4} textAlignVertical="top"/>
      </View>
      <View style={styles.buttonRow}>
                <BackButton buttonName="Back" onPress={() => navigation.goBack()} />
        <SaveButton buttonName="Save" onPress={manageSave}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 60,
    width: "100%",
  },
  textLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#fff",
    minHeight: 80,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});