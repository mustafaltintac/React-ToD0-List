import { useState } from "react";
import React, { useRef } from "react";

import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterTask, setFilterTask] = useState([]);
  const inputRefTask = useRef(null);
  const [flag,setFlag]=useState(false)

  const filter=(text)=>{
    if(text!==""){
      const filteredTask=tasks.filter((task)=>{
        return task.title.toLowerCase().includes(text.toLowerCase())
      })
      if(filteredTask.length>0){
        setFilterTask(filteredTask)
        setFlag(true)
      }
      else{
        alert("Aradığınız Task Bulunamadı")
        setFilterTask(tasks)
      }
    }
    else{
      setFlag(false)
    }
    }

  const createTask = (title, tascDesc) => {
    if(title!==""){
      const newTask = {
        id: Math.round(Math.random() * 99999999),
        title: title,
        tascDesc: tascDesc,
        isCompleted: false,
        isInput: false,
      };
      const createTasks = [...tasks, newTask];
      setTasks(createTasks);
    }
    else{
      alert("BAŞLIK GİRMEDİNİZ")
    }

  };

  const deleteTask = (id) => {
    const selectedTaskId = tasks.findIndex((obj) => obj.id == id);
    tasks.splice(Number(selectedTaskId), 1);
    setTasks([...tasks])

    const selectedTaskId2 = filterTask.findIndex((obj) => obj.id == id);
    filterTask.splice(Number(selectedTaskId2), 1);
    if(filterTask.length<1){
      setFilterTask([...tasks]);
      alert("LİSTEDİNİZDE TASK KALMADI")

    }
    else{
      setFilterTask([...filterTask]);

    }
  };

  const completeTask = (id) => {
    const selectedTaskId = tasks.findIndex((obj) => obj.id == id);
    tasks[selectedTaskId].isCompleted = true;
    setTasks([...tasks]);
  };

  const focus = () => {
    inputRefTask.current.focus();
  };



  return (
    <div className="App">
      <TaskCreate
        createTask={createTask}
        tasks={tasks}
        inputRefTask={inputRefTask}
        focus={focus}
        filter={filter}
      />
      <h1>GÖREVLER</h1>

      <TaskList
        tasks={flag?filterTask:tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        focus={focus}
        filterTask={filterTask}
      />
    </div>
  );
}

export default App;
