import React from "react";

const Todolist = ({ todos, setTodos }) => {
  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status: true } : todo))
    );
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo Items</h2>
      {todos.length === 0 ? (
        <p>No tasks yet. Add something!</p>
      ) : (
        <ul>
          {todos.map((el) => (
            <li key={el.id}>
              {el.title} {" ---> "}
              {el.status ? "Completed ✅" : "Not Completed ❌"}
              <button
                onClick={() => handleComplete(el.id)}
                disabled={el.status}
              >
                Complete
              </button>
              <button onClick={() => handleRemove(el.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todolist;
