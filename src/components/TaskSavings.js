import React from "react";
import './components.css';

const TaskSavings = ({calculateSavings, calculateToObjective}) => {
    return(
        <div className="taskSavings">
            <h1>Savings</h1>
            <span>{calculateSavings()}</span><br></br>
            <span>{calculateToObjective()}</span>
        </div>
    );
}

export default TaskSavings;