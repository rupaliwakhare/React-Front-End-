import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((el) => (
        <li key={el.id}>
          {el.title} - {el.amount}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
