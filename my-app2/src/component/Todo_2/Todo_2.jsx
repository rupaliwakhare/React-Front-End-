import React, { useState } from "react";
import Addtodo from "./Addtodo";
import Todolist from "./Todolist";

const Todo_2 = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (text.trim() === "") return;

    const newItem = {
      title: text,
      status: false,
      id: Math.floor(Math.random() * 1000),
    };

    setTodos([...todos, newItem]);
    setText("");
  };

  return (
    <div>
      <Addtodo text={text} handlechange={handleAddTodo} setText={setText} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo_2;
