import React, { useEffect, useState } from "react";
import ExpenseForm from "./Components/ExpenseForm" 
import ExpenseList from "./Components/expenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  //load data from ls
  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("expenses"));
    if (saveData) {
      setExpenses(saveData);
    }
  }, []);

  //  save data to localstorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  //Add new Expense
  const addExpense = (data) => {
    setExpenses([...expenses, data]);
  };

  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total = total + Number(expenses[i].amount); // t = 0  + 100 , 0100+200 = 0100200
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h2>Total : {total} </h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
