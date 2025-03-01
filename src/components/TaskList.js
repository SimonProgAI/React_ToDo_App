import React from "react";
import { useState, useRef } from "react";

function TaskManager() {

    const initList = [
        {task: 'Make your bed', value: '5', completed: true}
    ]

    const [list, setList] = useState(initList);
    //create ref for list key&value pairs
    const taskRef = useRef();
    const valueRef = useRef();
    const completedRef = useRef();

    const handleAdd = () => {
        const task = taskRef.current.value;
        const value = Number(valueRef.current.value);
        const completed = completedRef.current.value;
        let listTemp = {};
        listTemp.task = task;
        listTemp.value = value;
        listTemp.completed = completed; 
        console.log(listTemp);
        let wholeList = [...list, listTemp];
        setList(wholeList);
    }

    return ( 
        <div>
            {

            }
        </div>
    )
}

export default TaskManager ;