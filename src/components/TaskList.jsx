import React from 'react'

function TaskList(props) {

    const { endTask, deleteTask } = props
    const taskArr = props.taskArr.length > 0 ? props.taskArr : JSON.parse(localStorage.getItem('tasks'))

    return (
        <div className="task-conteiner">
            <ul>
                {taskArr && taskArr.length > 0 ?
                    taskArr.map((el, i) => (
                        <li key={i}>
                            <div className={el['done']? "line-true": null} >{el.title}</div>
                            <div className="icon">
                                <i title="complete" onClick={()=> endTask(i)} className={`fas fa-check-circle pointer ${el['done'] ? "green" : "blue"}`} />
                                <i title="delete" onClick={()=>deleteTask(i)} className="fas fa-trash-alt pointer" />
                            </div>
                        </li>

                    )) : null
                }
            </ul>
        </div>
    )
}

export default TaskList