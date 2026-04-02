import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ListItems({ item, onDelete, onToggleComplete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[ styles.title, item.completed && styles.completedText, ]}>
          {item.title}
        </Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Ionicons name={expanded ? "caret-up-outline" : "caret-down-outline"} size={24} color="black" />
        </TouchableOpacity>
      </View>

      {expanded && (
        <>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.controls}>
            {!item.completed && (
              <TouchableOpacity onPress={() => onToggleComplete(item.id)}>
                <Ionicons name="checkmark-circle" size={28} color="green" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => onDelete(item.id)}>
              <Ionicons name="trash" size={28} color="red" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "gray",
  },

  description: {
    marginTop: 10,
    fontSize: 16,
    color: "black",
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 10,
  },
});