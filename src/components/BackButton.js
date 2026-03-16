import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function BackButton({ buttonName, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Ionicons name="arrow-back" size={20} color="white" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>{buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#9e4caf",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});