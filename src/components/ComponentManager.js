import React from "react";
import { useState, useRef } from "react";
import CreateProfile from "./CreateProfile";
import ProfileOutput from "./ProfileOutput";
import TaskInput from "./TaskInput";
import TaskOutput from "./TaskOutput";
import TaskHistory from "./TaskHistory";
import TaskSavings from "./TaskSavings";

import './components.css';

function ComponentManager() {
//---VARIABLES---//
  //createProfile
    const [user, setUser] = useState();
    const userRef = useRef();
    const [objective, setObjective] = useState();
    const objectiveRef = useRef()

  //TaskOutput
    const initList = [
        {task: 'Make your bed', dollarValue: '5'},
        {task: 'Get ready', dollarValue: '5'}
    ]
    const [list, setList] = useState(initList);

    const taskRef = useRef();
    const dollarValueRef = useRef();

  //TaskHistory
   const [listHistory, setListHistory] = useState([]);

  //TaskSavings
    const [savings, setSavings] = useState();


//---FUNCTIONS---//
    const createProfile = (e) => {
        e.preventDefault();
        const user = userRef.current.value;
        //console.log(user);
        setUser(user);
        const objective = objectiveRef.current.value;
        setObjective(objective);
        //console.log(objective);
        if (user === ""||user === null||objective==="") {
            let errMessage = `Please enter a name and objective.`;
            console.log(errMessage)
            alert(errMessage);
        };
    }
    const addItem = (e) => {
        e.preventDefault();
        //console.log('addItem called')
        const task = taskRef.current.value;
        const dollarValue = Number(dollarValueRef.current.value);
        let listTemp = {};
        listTemp.task = task;
        listTemp.dollarValue = dollarValue;
        //console.log(listTemp);
        let wholeList = [...list, listTemp];
        setList(wholeList);
        //console.log(wholeList);
        if (listTemp.task === ""||listTemp.task === null||listTemp.dollarValue==="") {
            let errMessage = `Please enter a task and value.`;
            console.log(errMessage)
            alert(errMessage);
        };
    }
    const deleteItem = (task) =>{
        let idx = list.findIndex((entry) => entry.task === task);
        //console.log(idx); 
        let wholeList = [...list];
        wholeList.splice(idx, 1);
        setList(wholeList);
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
    const calculateSavings = () => {
        let sum = 0;
        for (let i=0;i<listHistory.length;i++) {
            sum += Number(listHistory[i].dollarValue);
        }
        setSavings(sum);
        let message = `$${savings} saved,`;
        return message;
    }
    const calculateToObjective = () => {
        let difference = objective - savings;
        let message1 = `$${difference} to go!`;
        let message2 = `Set an objective and start saving!`;
        if (!isNaN(objective)){
            return message1;
        }else if (isNaN(objective)){
            return message2;
        }
        
    }

    return(
        <div className="ToDo-Container">
            <div>
                <ProfileOutput user={user} objective={objective}/>
                <CreateProfile userRef={userRef} objectiveRef={objectiveRef} createProfile={createProfile}/>
            </div>
            <div>
                <h3>To-do</h3>
                <TaskInput taskRef={taskRef} dollarValueRef={dollarValueRef} addItem={addItem}  />
                <TaskOutput list={list} deleteItem={deleteItem} completedItem={completedItem} />
            </div>
            <div>
                <h3>Completed Tasks</h3>
                <TaskSavings calculateSavings={calculateSavings} calculateToObjective={calculateToObjective}/>
                <TaskHistory listHistory={listHistory} undoCompletedItem={undoCompletedItem} />
            </div> 
        </div>
      )
}

export default ComponentManager ;