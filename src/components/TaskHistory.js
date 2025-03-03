import React from "react";
import './components.css';

//completed on what date and time?
function TaskHistory({listHistory}){
    
    return(
        <div>
            {listHistory.map( (listHistory) => {
                return(
                    <div key={listHistory.task} className='taskHistory'>
                        <span>{listHistory.task}</span>, 
                        <span>{listHistory.dollarValue}</span>, 
                    </div>
                )
            })     
            }
        </div>
    )
}

export default TaskHistory;