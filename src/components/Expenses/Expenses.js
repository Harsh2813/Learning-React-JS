import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
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
      {props.items.map((expense) => {// whenever we mapping to any list we have to return for render and add key id
        return (
          <ExpenseItem
            key={expense.id}// NOTE- it is very important to add this key with id because when we see in browser, as we add any input so browser will add that input list to anywhere or at last what browser do it just update the newly added list with last one list and shift all data or replace to upwards so that first one added should be at top and newly is in last but this leads to slow performance and bugs because browser everytime updating all data shifting upwards by adding newly list in last list. So if we add key id then brwser will not replace any or shift list it will just add at top the newly added input list
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
