import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TodoList = ({ todos, toggleTodo }) => (
  <View style={{ padding: 17 }}>
    {todos.map((todo) => (
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <View
          style={{
            backgroundColor: "#dbedea",
            marginVertical: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textDecorationLine: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.id + 1}. {todo.text}
          </Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default TodoList;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
