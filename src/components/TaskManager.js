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
        console.log(list);
    }
    
    const deleteItem = (task) =>{
        console.log('deleteItem called on');
        let idx = list.findIndex((t) => t.task === task);
        let wholeList = [...list];
        wholeList.splice(idx, 1);
        setList(wholeList);
    }

   /* const handleDelete = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        deleteItem(task);
    }*/

    const completedItem = (e) => {
        e.preventDefault();
    }

    

    return(
        <div>
          <TaskInput taskRef={taskRef} valueRef={valueRef} completedRef={completedRef} addItem={addItem} />
          <TaskOutput list={list} deleteItem={deleteItem}/>
        </div>
      )
}

export default TaskManager ;