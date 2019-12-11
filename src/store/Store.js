import React, { createContext, useReducer } from "react";
import { TodosReducer } from "./reducers/TodosReducer";

const initialState = {
  todos: [],
  loading: false
};

export const TodoContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodosReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
