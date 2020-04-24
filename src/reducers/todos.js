const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DISMISS_FINISHED": {
      let newState = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].completed === false) newState.push(state[i]);
      }
      return newState;
    }

    default:
      return state;
  }
};

export default todos;
