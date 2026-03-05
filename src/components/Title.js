import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginTop: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "black",
    borderRadius: 10,
  },
});