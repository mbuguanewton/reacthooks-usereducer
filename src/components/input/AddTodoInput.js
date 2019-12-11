import React, { useState, useContext } from "react";
import "./input.scss";
import { TodoContext } from "../../store/Store";
import { addTodo } from "../../store/actions/TodosActions";
import uuid from "uuid";

function AddTodoInput() {
  const { state, dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    completed: false
  });

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(addTodo(todo));
  };
  return (
    <div className="todo__form">
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="text"
            name="todo"
            id="todo"
            defaultValue={todo.title}
            placeholder="add todo"
            className="form__control"
            onChange={e =>
              setTodo({
                id: uuid.v4(),
                title: e.target.value,
                completed: false
              })
            }
          />
        </div>
      </form>
      <button onClick={handleSubmit} className="btn">
        Add Todo
      </button>
    </div>
  );
}

export default AddTodoInput;
