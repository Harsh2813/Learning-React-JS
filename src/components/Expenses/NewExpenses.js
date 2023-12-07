import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpenses = (props) =>{// Now we taken here props because we are using its parent compo App.js function as we did for ExpenseForm to this NewExpenses.js

    const saveExpenseDataHandler = (enteredExpenseData) =>{ // we taken expenseData object of our child component expenseForm as a parameter in eteredExpenseData variable and passed it here
        const expenseData = { // here we created a object variable and stored parameter all object by copying using spread operator and gave a unique id by using Math.random to every data
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData); // now this console.log will work in our child component also a we passed this fn to child also, but in browser it will show console.log from this compo NewExpense only which is obvious.
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
            {/* we taken onSaveExpenseData starting with on keywork like onClick as tell this is our eventVariable
            Here we passed saveExpenseDataHandler fn of this component to ExpenseForm by storing it to our custom eventHandler variable which is onSaveExpenseData here. and We called this onSaveExpenseData fn in our child component expenseForm by taking the expenseData from child as a paramater here in our saveExpenseDataHandler fn. That's how we interacting between child to parent
            */}
        </div>
    )
}

export default NewExpenses;