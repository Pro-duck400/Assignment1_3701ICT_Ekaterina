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
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  todoText: {
    fontSize: 18,
  },
});