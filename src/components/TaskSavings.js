import React from "react";
import './components.css';

const TaskSavings = ({calculateSavings, calculateToObjective}) => {
    return(
        <div className="taskSavings">
            <span>{calculateSavings()}</span><br></br>
            <span>{calculateToObjective()}</span>
        </div>
    );
}

export default TaskSavings;