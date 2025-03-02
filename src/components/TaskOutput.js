import React from "react";
import './components.css';


function TaskOutput({list, deleteItem, setSelectedTask}){
    
    return(
        <div>
            {list.map( (list) => {
                return(
                    <div key={list.task}className='taskOutput'>
                        <span>{list.task}</span>, 
                        <span>{list.dollarValue}</span>, 
                        <span>{list.completed}<label>Done<input type="checkbox"/></label></span>
                        <button>edit</button>
                        <button onClick={()=>deleteItem(list.task)} >delete</button>
                    </div>
                )
            })     
            }
        </div>
    )
}
console.log(TaskOutput);
export default TaskOutput;