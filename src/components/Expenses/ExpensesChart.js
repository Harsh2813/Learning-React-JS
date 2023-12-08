import React from "react";
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'March', value: 0},
        {label: 'April', value: 0},
        {label: 'May', value: 0},
        {label: 'June', value: 0},
        {label: 'Jaly', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]
    for(const expense of props.expenses){//for of loop becuase expenses of props is an array not object ki in use kre
        const expenseMonth = expense.date.getMonth();// starting at 0 where Jan is 0 Feb is 1 as month idx array idx
        chartDataPoints[expenseMonth].value += expense.amount;// that's why taken espenseMonth as index becuase first month  is Jan and first index should be 0. Now for each index per object's value me add hoga amount
    }

  return <Chart dataPoints = {chartDataPoints}/>// we are passing objects of charDatapoints array after adding each array index ke object ki values me jo bhi expense ke amount ki value hogi to total value go gyi expense add ho gyi
}

export default ExpensesChart;
