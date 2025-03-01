import React from "react";
import { useState, useRef } from "react";
import TaskInput from "./TaskInput";
import TaskOutput from "./TaskOutput";


function TaskManager() {

    const initList = [
        {task: 'Make your bed', value: '5', completed: true},
        {task: 'Get ready', value: '5', completed: true}
    ]

    const [list, setList] = useState(initList);

    const taskRef = useRef();
    const valueRef = useRef();
    const completedRef = useRef();

    const addItem = (e) => {
        e.preventDefault();
        console.log('addItem called')
        const task = taskRef.current.value;
        const value = Number(valueRef.current.value);
        const completed = Boolean(completedRef.current.value);
        let listTemp = {};
        listTemp.task = task;
        listTemp.value = value;
        //listTemp.completed doesn't console.log
        listTemp.completed = completed; 
        console.log(listTemp);
        let wholeList = [...list, listTemp];
        setList(wholeList);
    }
    
    const deleteItem = (e) =>{
        e.preventDefault();
        //delete item with current key/id from listTemp or list or whole list
    }

    const completedItem = (e) => {
        e.preventDefault();
    }

    

    return(
        <div>
          <TaskInput taskRef={taskRef} valueRef={valueRef} completedRef={completedRef} addItem={addItem}/>
          <TaskOutput list={list}/>
        </div>
      )
}

export default TaskManager ;