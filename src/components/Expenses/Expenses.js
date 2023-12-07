import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');//date select krne k bad waps ye compo chale isliye state
  const filterChangeHandler = (selectedYear) =>{// jo bhi target year value thi use selectedYear me as a param. liye
    setFilteredYear(selectedYear);// aur fir usi selected date ko filteredYear me set kr diye
  }
  const filteredExpenses = props.items.filter((expenses) => {// props.item me filter lagaye aur expenses variable le liye per props.items array ke liye isiliye ab props.item ko expenses se denote kiye niche
    return expenses.date.getFullYear().toString() === filteredYear;// agar ye true hota h to jo bhi filtered ya selected year select kiye usi year ke sare value filter hoke year wise filteredExpenses me store ho gye aur niche map function chala diye isi filtered year wise array ke liye taki jis year ka bhi ho wahi bs show ho
  })
  return (
    <Card className="expenses">
      {/* {expenses.map((obj) => (
        <ExpenseItem
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
          LocationOfExpenditure={obj.LocationOfExpenditure}
        ></ExpenseItem>
      ))} */}

      <ExpensesFilter
        selected = {filteredYear}
        onChangeFilter = {filterChangeHandler}
      />
      {filteredExpenses.map((expense) => {// whenever we mapping to any list we have to return for render and add key id
        return (
          <ExpenseItem
            // NOTE- it is very important to add this key with id because when we see in browser, as we add any input so browser will add that input list to anywhere or at last what browser do it just update the newly added list with last one list and shift all data or replace to upwards so that first one added should be at top and newly is in last but this leads to slow performance and bugs because browser everytime updating all data shifting upwards by adding newly list in last list. So if we add key id then brwser will not replace any or shift list it will just add at top the newly added input list
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      ;
    </Card>
  );
};

export default Expenses;
