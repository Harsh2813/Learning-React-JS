import React, {useState} from 'react';// for using specific library of react like state hook we have to import react
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
//import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);// we have to use or initialize useState under main component like here we did not outside of it nor inside any nested component
    //console.log("every time it initialize state this console will run")// useState doesn't means that it update changes for update changes after re render component we have to call setState fn which is setTitle here
    const clickHandler = () =>{
        setTitle('updated')//ye fn callback queue me gya jb tk niche wala console.log previous value print kiya
        console.log(title);
    }
    return ( // we wrapped all contend inside Card custom component as passed all content inside it to Card as props using props.children and passed all classes as props.classes and added to Card class as string
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>  {/**here we use title directly not props.title because we passed title as props.title above in destructing for useState so we have to pass first value of title then as many times this component called React will change its state for this title rest work will react do */}
                <h2>{props.LocationOfExpenditure}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Expense</button>
        </Card>
    )
}

export default ExpenseItem;