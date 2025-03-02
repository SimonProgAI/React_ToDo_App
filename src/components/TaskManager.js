import React from "react";
import { useState, useRef } from "react";
import TaskInput from "./TaskInput";
import TaskOutput from "./TaskOutput";


function TaskManager() {

    

    const initList = [
        {task: 'Make your bed', dollarValue: '5', completed: true},
        {task: 'Get ready', dollarValue: '5', completed: true}
    ]

    const [list, setList] = useState(initList);

    const taskRef = useRef();
    const dollarValueRef = useRef();
    const completedRef = useRef();

    const addItem = (e) => {
        e.preventDefault();
        console.log('addItem called')
        const task = taskRef.current.value;
        const dollarValue = Number(dollarValueRef.current.value);
        const completed = completedRef.current.value;
        let listTemp = {};
        listTemp.task = task;
        listTemp.dollarValue = dollarValue;
        //listTemp.completed doesn't console.log
        listTemp.completed = completed; 
        console.log(listTemp);
        let wholeList = [...list, listTemp];
        setList(wholeList);
        console.log(wholeList);
    }
    
    
    const deleteItem = (task) =>{
        //doesn't delete the right index
        
        let idx = list.findIndex((entry) => entry.task === task);
        console.log(idx); //task 
        let wholeList = [...list];
        wholeList.splice(idx, 1);
        setList(wholeList);
    }

    // Completed Tasks output
    // Display Savings by adding the value of completed items

   /* const handleDelete = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        deleteItem(task);
    }*/

    /*const completedItem = (e) => {
        e.preventDefault();
    }*/

    

    return(
        <div>
          <TaskInput taskRef={taskRef} dollarValueRef={dollarValueRef} completedRef={completedRef} addItem={addItem} />
          <TaskOutput list={list} deleteItem={deleteItem} />
        </div>
      )
}

export default TaskManager ;