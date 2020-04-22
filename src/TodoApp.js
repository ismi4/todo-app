import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./containers/AddTodo";
import VisibleTodos from "./containers/VisibleTodos";
import { ScrollView } from "react-native-gesture-handler";

export default class TodoApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />

        <View style={styles.todos}>
          <ScrollView>
            <VisibleTodos />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  todos: {
    margin: 20,
    marginHorizontal: 10,
  },
});
