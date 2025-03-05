import React from "react";
import './components.css';


function TaskOutput({list, deleteItem, completedItem}){
    
    return(
        <div>
            <h3>To-do</h3>
            {list.map( (list) => {
                return(
                    <div key={list.task}className='taskOutput'>
                        <span>{list.task}</span> 
                        <span> ${list.dollarValue}</span> 
                        <span>{list.completed}<input type="checkbox" onChange={()=>completedItem(list.task)}/></span>
                        <button onClick={()=>deleteItem(list.task)}>delete</button>
                        <br></br>
                        <span className="editArea"></span>
                    </div>
                )
            })     
            }
        </div>
    )
}

export default TaskOutput;