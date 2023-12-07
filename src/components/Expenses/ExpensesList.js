import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Responses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        // whenever we mapping to any list we have to return for render and add key id
        return (
          <ExpenseItem
            // NOTE- it is very important to add this key with id because when we see in browser, as we add any input so browser will add that input list to anywhere or at last what browser do it just update the newly added list with last one list and shift all data or replace to upwards so that first one added should be at top and newly is in last but this leads to slow performance and bugs because browser everytime updating all data shifting upwards by adding newly list in last list. So if we add key id then brwser will not replace any or shift list it will just add at top the newly added input list
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })};
    </ul>
  );
};

export default ExpenseList;
