let nextId = 0;
import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextId++,
  text,
});
a;
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
