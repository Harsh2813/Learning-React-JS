import React from "react";
import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%'; // this if for styling we taken bar height as 0% becuase below we assinged barHeight value after calculating

    if(props.maxValue > 0){// if our max value have any value so accoding to that value we are calculating the percentage of barFillHeight so that bar's height can be same as percentage value as we divided value from maxval
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';// and added % sign and passed to style
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight} /*This style in React takes object  for styling unlike JS it takes JS object so we created object of height and passed it barFillHeight */}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;