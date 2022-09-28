import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 100.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e1",
    title: "Motor",
    amount: 123.45,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e1",
    title: "Dinner",
    amount: 50.25,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e1",
    title: "Party",
    amount: 10000,
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
