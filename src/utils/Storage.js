import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODO_KEY } from "../constants/keys";

export const loadTodos = async () => {
    const stored = await AsyncStorage.getItem(TODO_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const saveTodos = async (todos) => {
    await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos));
};