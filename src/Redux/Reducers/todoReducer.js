const initialState = {
  todos: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [state.todos, action.payload] };
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }
};
export default todoReducer;
