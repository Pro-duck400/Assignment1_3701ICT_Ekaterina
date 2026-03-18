import { View, StyleSheet } from "react-native";
import ListItems from "../components/ListItems";
import Title from "../components/Title";
import AddButton from "../components/AddButton";

export default function Home({ navigation }) {
  const listItems = [
    {id: 1, title: "Buy groceries"},
    {id: 2, title: "Workout"},
    {id: 3, title: "Journal"},
  ];

  return (
    <View style={styles.homeContainer}>
      <Title>My Todo List</Title>
      <View style={styles.lineDivider} />
      <View style={styles.listContainer}>
        {listItems.map((item) => (
          <ListItems key={item.id} title={item.title} />
        ))}
      </View>
      <View style={styles.lineDivider} />
      <AddButton buttonName="Add New Todo" onPress={() => navigation.navigate("NewTodoScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  lineDivider: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});