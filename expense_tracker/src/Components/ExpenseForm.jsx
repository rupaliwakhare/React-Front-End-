import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const submitHandler = () => {
    const expenseData = {
      id: Date.now(),
      title,
      amount,
    };

    onAddExpense(expenseData);

    setTitle("");
    setAmount(0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={submitHandler}>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
