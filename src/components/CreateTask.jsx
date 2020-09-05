import React, {useState} from 'react'
import TaskList from './TaskList'
import swal from 'sweetalert'

function CreateTask() {

    const[task, setTask] = useState({'title':'', 'done':false})
    const[taskArr, setTaskArr]= useState([])

    let tasks = localStorage.hasOwnProperty('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

    function writeTask(e){
        let obj ={}
        obj['title'] = e.target.value
        obj['done'] = false
        setTask(obj)
    }

    function saveTask(){
        if(task.title !== ''){
            tasks.unshift(task)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            setTask({'title':'', 'done':false})
        }else{
            swal('Oops', 'Please write task', 'error')
        }
    }

    function endTask(i){
        if(tasks[i]['done'] !== true){
            tasks[i]['done'] = true
            localStorage.setItem('tasks', JSON.stringify(tasks))
            setTaskArr(tasks)
            swal('Good job!', 'Task completed','success')
        }
    }

    function deleteTask(i){
        swal({
            title: 'Are you sure?', 
            text:'Once deleted, you will not be able to recover this task',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then(res=>{
            if(res){
                tasks.splice(i, 1)
                localStorage.setItem('tasks', JSON.stringify(tasks))
                setTaskArr(tasks)
            }
        })
    }

    return (
        <> 
            <div className="box">
                <div className="text-end">
                    <h2>React Task app</h2>
                    <p>add a new task</p>
                </div>
                <div className="form-addTask">
                    <input id="taskName" type="text" name="task" placeholder="Write here..." value={task.title} onChange={(e)=>writeTask(e)} />
                    <button className="btn-addTask" type="button" name="addTask" onClick={()=>saveTask()}>Add Task</button>
                </div>
            </div>
            <TaskList taskArr={taskArr} endTask={endTask} deleteTask={deleteTask} />
        </>
    )
}

export default CreateTask