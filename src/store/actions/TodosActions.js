import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  TODOS_LOADING,
  TODOS_LOADING_FAIL
} from "./Types";

export const todosLoading = () => {
  return {
    type: TODOS_LOADING
  };
};

export const todosFail = () => {
  return {
    type: TODOS_LOADING_FAIL
  };
};

export const fetchTodos = todos => {
  return {
    type: FETCH_TODOS,
    payload: todos
  };
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
