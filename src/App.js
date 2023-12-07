import React, { useState } from "react";
//import ExpenseItem from './components/ExpenseItem';
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/Expenses/NewExpenses";

const App = () => {
  const [expenses, setExpenes] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "town",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "village",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "city",
    },
  ]);

  const addExpenseHandler = (expense) => {
    //taking expense as a parameter from child NewExpenses
    setExpenes((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      {/* <div>
       {expenses.map((obj) => (
        <ExpenseItem
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
          LocationOfExpenditure={obj.LocationOfExpenditure}
        ></ExpenseItem>
      ))}
      
      </div> */}
      <Expenses items={expenses} />
    </div>
  );

  /** This is JSX code which we used above now we will convert it in basic react using JS
   * return (
      <div>
        <h2>Let's get Started!</h2>
        <Expenses items= {expenses}/>
      </div>
    );

    React.createElement(1st Argument which element we want to create, 2nd argument in object which takes attributes like in Expense there is attribute items which takes expenses as property, and third attribute can be anything like in h2 third attribute is lets get started string, and Expense don't have any third atrribute, div have third attribute as createElement h2 and fourth attribute as Expense can be more attributes also possible)

    return React.createElement('div', {}, 
      React.createElement('h2', {}, "Let's get Started!"),
      React.createElement(Expenses, {items : expenses})
    );
    But for this basic JS approach in React we have to use import React from 'React'; in every component as past
   */
};

export default App;
