import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/addExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
// var x= new Date(2012,10,23);
const data = [
  {
    id: "0.3536532",
    title: "jknj",
    amount: 22.33,
    date: new Date(2012, 10, 23),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(data);

  const newDataHandler = (expense) => {
    console.log("in app");
    console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  const [filteredYear, setFilteredYear] = useState("2022");
  const filteredYearHandler = (year) => {
    setFilteredYear(year);
    // console.log(filteredYear);
  };
  const filter = expenses.filter((x) => {
    return x.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <h1 id="head">Expense Tracker</h1>
      <NewExpense onNewData={newDataHandler} />
      <h1 id="expense">Your Expenses</h1>
      <div className="allExpenses">
        <div className="filter">
          <ExpenseFilter
            selected={filteredYear}
            filteredYear={filteredYearHandler}
          ></ExpenseFilter>
        </div>
        {filter.length === 0 ? (
          <h1 className="Error">No expense Found!!</h1>
        ) : (
          filter.map((expense) => (
            <ExpenseItem
              key={expense.id}
              name={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))
        )}
      </div>
    </>
  );
};

export default App;
