import React from "react";
import { useState, useRef } from "react";
import TaskInput from "./TaskInput";
import TaskOutput from "./TaskOutput";
import TaskHistory from "./TaskHistory";


function TaskManager() {

//VARs for TaskOutput
    const initList = [
        {task: 'Make your bed', dollarValue: '5', completed: false},
        {task: 'Get ready', dollarValue: '5', completed: false}
    ]
    const [list, setList] = useState(initList);

    const taskRef = useRef();
    const dollarValueRef = useRef();
    //const completedRef = useRef(false);

//VARs for TaskHistory
   const [listHistory, setListHistory] = useState([]);

    const addItem = (e) => {
        e.preventDefault();
        console.log('addItem called')
        const task = taskRef.current.value;
        const dollarValue = Number(dollarValueRef.current.value);
        //const completed = Boolean(completedRef.current.value);
        let listTemp = {};
        listTemp.task = task;
        listTemp.dollarValue = dollarValue;
        //listTemp.completed doesn't console.log
        //listTemp.completed = completed; 
        console.log(listTemp);
        let wholeList = [...list, listTemp];
        setList(wholeList);
        console.log(wholeList);
    }
    
    
    const deleteItem = (task) =>{
        let idx = list.findIndex((entry) => entry.task === task);
        console.log(idx); //task 
        let wholeList = [...list];
        wholeList.splice(idx, 1);
        setList(wholeList);
    }

    //Doesn't edit the item yet
    const editItem = (task) =>{    
        let idx = list.findIndex((entry) => entry.task === task);
        console.log(idx); //task 
        let wholeList = [...list];
        wholeList.splice(idx, 1);
        setList(wholeList);
    }
    
    const completedItem = (task) => {
        let wholeList = [...list];
        let history = [...listHistory]
        let idx = list.findIndex((entry) => entry.task === task);
        console.log(idx); 
        history.push(wholeList[idx]);
        setListHistory(history);
        wholeList.splice(idx, 1);
        setList(wholeList);
        console.log(listHistory);
    }
    
    //UNDO item from Task History

    // Display Savings by adding the value of completed items
    return(
        <div>
          <TaskInput taskRef={taskRef} dollarValueRef={dollarValueRef} addItem={addItem}  />
          <TaskOutput 
                list={list} 
                deleteItem={deleteItem} 
                editItem={editItem}
                completedItem={completedItem} 
            />
          <br></br>
          <TaskHistory listHistory={listHistory} />
            
                  
        </div>
      )
}

export default TaskManager ;