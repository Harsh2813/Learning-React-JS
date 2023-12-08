import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{ // we taken props here because here we are communication from child to parent or using parent data of functions as we called onSaveExpenseData in this compo.

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
 //Instead of using all separate state we can use a single combined state because all this state is for common form
    /*
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });
    */
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);

        // setUserInput({// this is not ideal approach because here we depend on single state for all input objects
        //     ...userInput, // this can be give outdated state data as state is async as sheduled in callback queue
        //     enteredTitle: event.target.value // but below approch gives updated data and ideal for single state
        // })

        // setUserInput((prevState) =>{ // this prevState automatically takes above state's object that's why w                               we did ...prevState not ...userInput becuase all we get in preState
        //     return {...prevState, enteredTitle: event.target.value};
        // });

        // jo bhi onChange event se value milegi wo enteredTitle me jayegi enteredTitle uper state me initilized h aur baki amount date khali rahega becuase ye titleChangeHandler me amountChange me spread operator se sb copy krke sirf amount store karenge aur return
        //we can we do this method if we take single state and NOTE:-- React shedules state's update so by using this method react will gaurantee that the state snapshot we used as innerfunction setUserInput will always be latest and updated snapshot state keep all scheduled state updated in mind
    };
    
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };
    
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };

    const SubmitHandler = (event) =>{ // as the form submit we maked object of input
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData); // we taken props from NewExpense and called onSaveExpenseData function of our parent component by passing data expenseData as parameter because we are using their fn.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step = '0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min= '2019-01-01' max= '2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type= 'button' onClick={props.onCancel /**Added a cancel button as this button will click parent newExpense ka stopEditingHandler chalega aur set state false me hogi, see there */}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;