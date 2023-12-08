import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) =>{// Now we taken here props because we are using its parent compo App.js function as we did for ExpenseForm to this NewExpenses.js

    const [isEditing, setIsediting] = useState(false);// we use ths state for form visibility if button click the state changed to true and form show otherwise only button should visible

    const saveExpenseDataHandler = (enteredExpenseData) =>{ // we taken expenseData object of our child component expenseForm as a parameter in eteredExpenseData variable and passed it here
        const expenseData = { // here we created a object variable and stored parameter all object by copying using spread operator and gave a unique id by using Math.random to every data
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);// this will run jaise ki hmne form submit kr click kiya fir input aaye saveEspenseDataHandler me aur id banke App ko de diye taki wo ab screen me show ho pr submit click to ho
        setIsediting(false);// gya mtlb yha false krke form invisible kr sakte h to button dikhegi add ki ab bs.
        
        //console.log("Added") // now this console.log will work in our child component also a we passed this fn to child also, but in browser it will show console.log from this compo NewExpense only which is obvious.
    }

    const startEditingHandler = () =>{ // this fn will run if button got click and as clicked state set to true
        setIsediting(true);
    }
    const stopEditingHandler = () =>{
        setIsediting(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add a new Expense</button> /*if state if false then only this button will visible if clicked on this button then fn run and state will set to true */}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>/*and if state set true then this expense form will visible on screen */}
            {/* we taken onSaveExpenseData starting with on keywork like onClick as tell this is our eventVariable
            Here we passed saveExpenseDataHandler fn of this component to ExpenseForm by storing it to our custom eventHandler variable which is onSaveExpenseData here. and We called this onSaveExpenseData fn in our child component expenseForm by taking the expenseData from child as a paramater here in our saveExpenseDataHandler fn. That's how we interacting between child to parent
            */}
        </div>
    )
}

export default NewExpenses;