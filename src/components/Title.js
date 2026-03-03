import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "green",
    padding: 20,
    borderRadius: 10,
  },
});