import React from "react";
import './components.css';

//completed on what date and time?
function TaskHistory({listHistory,undoCompletedItem}){
    
    return(
        <div>
            {listHistory.map( (listHistory) => {
                return( 
                    <div key={listHistory.task} className='taskHistory'>
                        <span>{listHistory.task}</span>, 
                        <span>{listHistory.dollarValue}</span>,
                        <span><button onClick={()=>undoCompletedItem(listHistory.task)} >not completed</button></span> 
                    </div>
                )
            })     
            }
        </div>
    )
}

export default TaskHistory;