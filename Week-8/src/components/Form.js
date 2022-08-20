import React from "react";
import { v4 } from "uuid";
import { useEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";


const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) =>{
    const newTodo = todos.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
    )
    setTodos(newTodo);
    setEditTodo("");
  }

  useEffect(() => {
    if(editTodo){
      setInput(editTodo.title);
    }else{
      setInput("");
    }
  },[setInput, editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editTodo){
      setTodos([...todos, { id: v4(), title: input, completed: false }]);
      setInput(" ");
    }else{
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter ToDo List Item"
        className="task-input"
        value={input}
        onChange={onInputChange}
        required
      />
      <button className="button-add" type="submit">
       {editTodo ? "OK" : <BsPlusCircleFill/>}
      </button>
    </form>
  );
};

export default Form;
