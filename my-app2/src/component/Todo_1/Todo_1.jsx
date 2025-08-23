import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAddTodo = () => {
    const newItem = {
      title: text,
      status: false,
      id: Math.floor(Math.random() * 1000),
    };
    setTodo([...todo, newItem]);
    setText(""); 
  };

  const complete = (id) => {
    const updated = todo.map((item) =>
      item.id === id ? { ...item, status: true } : item
    );
    setTodo(updated);
  };

  const remove = (id) => {
    const filtered = todo.filter((item) => item.id !== id);
    setTodo(filtered);
  };

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter your task"
      />
      <br />
      <button onClick={handleAddTodo}>Add</button>

      <div>
        <h1>Todo Items</h1>
        <ul>
          {todo.map((el) => (
            <li key={el.id}>
              {el.title} {" ---> "}
              {el.status ? "Completed✅" : "Not Completed❌"}
              <button onClick={() => complete(el.id)}>Completed</button>
              <button onClick={() => remove(el.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
