import React from "react";


const TaskInput = () => {
    return(
        <form>
            <label>
                Task
                <input type="text" placeholder="task" id="TaskNameInput" />
            </label>
            <label>
                $
                <input type="number" min="5" max="40" step="5" id="TaskValueNumber" />
            </label>
            <button /*onSubmit={}*/>Add</button>
        </form>
    )
}

export default TaskInput;