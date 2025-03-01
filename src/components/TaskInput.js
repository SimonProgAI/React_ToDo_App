import React from "react";


//<TaskInput taskRef={taskRef} valueRef={valueRef} completedRef={completedRef} handleAdd={handleAdd}
const TaskInput = ({taskRef, valueRef, addItem}) => {
    return(
        <form>
            <label>
                Task
                <input ref={taskRef} type="text" placeholder="task" id="TaskNameInput" />
            </label>
            <label>
                $
                <input ref={valueRef} type="number" min="5" max="40" step="5" id="TaskValueNumber" />
            </label>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TaskInput;