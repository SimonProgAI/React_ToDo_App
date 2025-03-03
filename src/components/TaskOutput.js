import React from "react";
import './components.css';


function TaskOutput({list, deleteItem, completedItem, editItem}){
    
    return(
        <div>
            {list.map( (list) => {
                return(
                    <div key={list.task}className='taskOutput'>
                        <span>{list.task}</span> 
                        <span> ${list.dollarValue}</span> 
                        <span>{list.completed}<input type="checkbox" onChange={()=>completedItem(list.task)}/></span>
                        <button onClick={()=>editItem(list.task)}>edit</button>
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
console.log(TaskOutput);
export default TaskOutput;