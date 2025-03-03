import React from "react";
import { useState, useRef } from "react";
import ProfileForm from "./ProfileForm";
import ProfileOutput from "./ProfileOutput";
import TaskInput from "./TaskInput";
import TaskOutput from "./TaskOutput";
import TaskHistory from "./TaskHistory";
import TaskSavings from "./TaskSavings";

import './components.css';

function TaskManager() {

//VARs for CreateProfile
    const [user, setUser] = useState();
    const userRef = useRef();
    const [objective, setObjective] = useState();
    const objectiveRef = useRef()
    
    const createProfile = (e) => {
        e.preventDefault();
        const user = userRef.current.value;
        console.log(user);



    }


//VARs for TaskOutput
    const initList = [
        {task: 'Make your bed', dollarValue: '5'},
        {task: 'Get ready', dollarValue: '5'}
    ]
    const [list, setList] = useState(initList);

    const taskRef = useRef();
    const dollarValueRef = useRef();

//VARs for TaskHistory
   const [listHistory, setListHistory] = useState([]);

//VARs for TaskSavings
    const [savings, setSavings] = useState();

    const addItem = (e) => {
        e.preventDefault();
        console.log('addItem called')
        const task = taskRef.current.value;
        const dollarValue = Number(dollarValueRef.current.value);
        let listTemp = {};
        listTemp.task = task;
        listTemp.dollarValue = dollarValue;
        console.log(listTemp);
        let wholeList = [...list, listTemp];
        setList(wholeList);
        console.log(wholeList);
    }

    const calculateSavings = () => {
        let sum = 0;
        for (let i=0;i<listHistory.length;i++) {
            sum += Number(listHistory[i].dollarValue);
        }
        setSavings(sum);
        return sum;
    }
    
    const deleteItem = (task) =>{
        let idx = list.findIndex((entry) => entry.task === task);
        //console.log(idx); 
        let wholeList = [...list];
        wholeList.splice(idx, 1);
        setList(wholeList);
    }
    
    //IN PROGRESS
    const editItem = (task) =>{    
        let editArea = document.querySelector("editArea");
        let inputField = `<input type="text" />`;
        let idx = list.findIndex((entry) => entry.task === task);
        let wholeList = [...list];
        console.log(wholeList[idx]);
        console.log(editArea.inputField);
    }
    
    const completedItem = (task) => {
        let wholeList = [...list];
        let history = [...listHistory];
        let idx = list.findIndex((entry) => entry.task === task);
        //console.log(idx); 
        history.push(wholeList[idx]);
        setListHistory(history);
        wholeList.splice(idx, 1);
        setList(wholeList);
        //console.log(listHistory);
    }

    const undoCompletedItem = (task) => {
        let wholeList = [...list];
        let history = [...listHistory];
        //console.log([...listHistory]);
        let idx = listHistory.findIndex((entry) => entry.task === task);
        wholeList.push(history[idx]);
        setList(wholeList);
        history.splice(idx,1);
        setListHistory(history);

    }
    
    return(
        <div>
          <ProfileForm userRef={userRef} createProfile={createProfile}/>
          <ProfileOutput />
          <TaskInput taskRef={taskRef} dollarValueRef={dollarValueRef} addItem={addItem}  />
          <TaskOutput 
                list={list} 
                deleteItem={deleteItem} 
                editItem={editItem}
                completedItem={completedItem} 
            />
          <br></br>
          <TaskHistory listHistory={listHistory} undoCompletedItem={undoCompletedItem} />
          <TaskSavings calculateSavings={calculateSavings}/>  
        </div>
      )
}

export default TaskManager ;