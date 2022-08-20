import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

const App = () => {
  
  const intitialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(intitialState);
  const [editTodo, setEditTodo] = useState(null);

  // console.log(JSON.stringify(todos));
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  //console.log(todos);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
