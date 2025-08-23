import React from "react";

const Addtodo = ({ text, handlechange, setText }) => {
  return (
    <div>
      <h1>Add Todo</h1>
      <input
        value={text}
        type="text"
        placeholder="Enter your task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlechange} disabled={!text.trim()}>
        Add
      </button>
    </div>
  );
};

export default Addtodo;
