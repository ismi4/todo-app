let nextId = 0;
import { ADD_TODO, TOGGLE_TODO, DISMISS_FINISHED } from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextId++,
  text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const dismissFinished = () => ({
  type: DISMISS_FINISHED,
});
