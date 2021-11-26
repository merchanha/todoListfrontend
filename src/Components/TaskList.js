import React, { useState, useEffect } from 'react';
import Axios from 'axios';




function TaskList() {


    const [task, setTask] = useState("")
    const [taskList, settaskList] = useState([])


    // function getTaskList() {
    //     Axios.get("http://localhost:4000/tasks")
    //         .then((response) => response.data)
            
    //         .then(response => settaskList({taskList: response}))
            


    // }

    useEffect(() => {

        const getTask = () => {
            Axios.get("http://localhost:4000/tasks")
            .then((results) => settaskList(results.data))

        }

           getTask()
           
        }, []);

    


     function onDeleteClick(id) {

        

     Axios.delete(`http://localhost:4000/deleteTask/${id}`)
     .then(results => results.data)

       



    //     Axios.delete(`http://localhost:4000/deleteTask/${id}`)
    //     const getTask = () => {
    //         Axios.get("http://localhost:4000/tasks")
    //         .then((results) => settaskList(results.data))

    //     }

    //        getTask()
        
        

        

    }



    function onSubmitClick() {

        Axios.post("http://localhost:4000/addTasks", {
            task: task

        })
            settaskList([...taskList, {task: task}]);
            setTask("")
      

    
    }








    return (



        <div>

            <h3>TaksList</h3>

            <div className="ui input">
                <input value={task} onChange={e => setTask(e.target.value)} placeholder="Your Task" />

            </div>

            <button className="ui primary button basic" onClick={onSubmitClick}>Submit</button>
            <hr />

            <div className="ui cards">
                {taskList.map((task) => (

                    <div key={task.id} className="card">
                        <div className="content">
                            <div className="meta">
                                {task.task}
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui basic green button">Done</div>
                                    <div className="ui basic red button" onClick={onDeleteClick(task.id)}>Delete</div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    )
}

export default TaskList


