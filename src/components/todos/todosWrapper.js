import React, { useEffect, lazy, Suspense, useContext } from "react";
import "./todos.scss";
import { TodoContext } from "../../store/Store";
import {
  fetchTodos,
  todosLoading,
  todosFail
} from "../../store/actions/TodosActions";
import axios from "axios";

const TodoCard = lazy(() => import("./TodoCard"));

function TodosWrapper() {
  const { state, dispatch } = useContext(TodoContext);

  const getTodos = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
    );

    return res;
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(todosLoading());
      const alltodos = getTodos();
      alltodos
        .then(res => {
          dispatch(fetchTodos(res.data));
        })
        .catch(error => {
          dispatch(todosFail);
        });
    }
  }, [dispatch]);

  const todos = state.todos;

  return (
    <div className="todos__wrapper">
      {todos && todos.length
        ? todos.map(todo => (
            <Suspense key={todo.id} fallback={<div className="blank"></div>}>
              <TodoCard todo={todo}></TodoCard>
            </Suspense>
          ))
        : null}
    </div>
  );
}

export default TodosWrapper;
