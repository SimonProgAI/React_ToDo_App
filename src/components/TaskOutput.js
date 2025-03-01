import React from "react";
import './components.css';


const initList = [
    {task: 'Make your bed', value: '5', completed: true},
    {task: 'Make your bed', value: '5', completed: true}
]

function TaskOutput(list){
    list = initList
    return(
        <div>
            {list.map( (list) => {
                return(
                    <div className='taskOutput'>
                        <span>{list.task}</span>, 
                        <span>{list.value}</span>, 
                        <span>{list.completed}<label>Done<input type="checkbox"/></label></span>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                )
            })     
            }
        </div>
    )
}

export default TaskOutput;