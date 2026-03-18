import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import NewTodoScreen from "./src/screens/NewTodoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewTodoScreen" component={NewTodoScreen} options={{ title: "Add New Todo", headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}