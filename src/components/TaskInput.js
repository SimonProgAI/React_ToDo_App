import React from "react";


//<TaskInput taskRef={taskRef} valueRef={valueRef} completedRef={completedRef} handleAdd={handleAdd}
const TaskInput = ({taskRef, dollarValueRef, addItem}) => {
    return(
        <form >
            <div className='taskInputSection'>
                <input ref={taskRef} type="text" placeholder="Enter task..." id="TaskNameInput" />
                <input ref={dollarValueRef} type="number" placeholder="$value" min="5" max="40" step="5" id="TaskValueNumber" />
                <button onClick={addItem}>Add</button>
            </div>
        </form>
    )
}

export default TaskInput;