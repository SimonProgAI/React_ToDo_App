import React from "react";
import './components.css';

const TaskSavings = ({calculateSavings}) => {
    return(
        <div className="taskSavings">
            <h1>Savings</h1>
            <span>${calculateSavings()} saved</span><br></br>
            <span>$__ left!</span>
        </div>
    );
}

export default TaskSavings;