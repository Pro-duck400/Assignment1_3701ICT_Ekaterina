import { View, TextInput, StyleSheet, Text } from "react-native";
import Title from "../components/Title";
import BackButton from "../components/BackButton";
import SaveButton from "../components/SaveButton";
import { useState } from "react";

export default function NewTodoScreen({ navigation }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  return (
    <View style={styles.container}>
      <Title>Add New Todo</Title>
      <View style={styles.divider} />
      <View style={styles.listContainer}>
        <Text style={styles.textLabel}>Title</Text>
        <TextInput
          style={styles.titleInput}
          placeholder="Add new todo title"
          value={todoTitle}
          onChangeText={setTodoTitle}
        />
        <Text style={styles.textLabel}>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Add your description"
          value={todoDescription}
          onChangeText={setTodoDescription}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
      <View style={styles.buttonRow}>
        <BackButton buttonName="Cancel" onPress={() => navigation.goBack()} />
        <SaveButton buttonName="Save" />
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