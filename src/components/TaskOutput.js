import React from "react";
import './components.css';


function TaskOutput({list, deleteItem}){
    
    return(
        <div>
            {list.map( (list) => {
                return(
                    <div className='taskOutput'>
                        <span>{list.task}</span>, 
                        <span>{list.value}</span>, 
                        <span>{list.completed}<label>Done<input type="checkbox"/></label></span>
                        <button>edit</button>
                        <button onClick={deleteItem}>delete</button>
                    </div>
                )
            })     
            }
        </div>
    )
}

export default TaskOutput;