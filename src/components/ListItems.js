import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ListItems({ title }) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  todoText: {
    fontSize: 18,
  },
});