import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ListItems from "../components/ListItems"; 

export default function Home() {
  const listItems = [
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Workout" },
    { id: 3, title: "Journal" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.listContainer}>
        {listItems.map((item) => (
          <ListItems key={item.id} title={item.title} />
        ))}
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  listContainer: {
    flex: 1,
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});