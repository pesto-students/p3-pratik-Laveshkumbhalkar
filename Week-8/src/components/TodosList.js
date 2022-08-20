import React from "react";
import { AiTwotoneEdit, AiFillCheckCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const TodosList = ({ todos, setTodos, setEditTodo }) => {


  const handleComplete = (todo) => {
    setTodos(
      //console.log(todos)
      todos.map((item) => {
        //console.log(todo.id);
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };


  const handleEdit = ({id}) => {
      const findTodo = todos.find((todo) => todo.id === id);
      setEditTodo(findTodo);
  }

  const handleDelete = ({ id }) => {
    //console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => {
              event.preventDefault();
            }}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <AiFillCheckCircle />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <AiTwotoneEdit />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <BsFillTrashFill />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
