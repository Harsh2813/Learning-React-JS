import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
//import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return ( // we wrapped all contend inside Card custom component as passed all content inside it to Card as props using props.children and passed all classes as props.classes and added to Card class as string
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <h2>{props.LocationOfExpenditure}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;