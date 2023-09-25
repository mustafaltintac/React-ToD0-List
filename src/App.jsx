import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, tascDesc) => {
    const newTask = {
      id: Math.round(Math.random() * 99999999),
      title: title,
      tascDesc: tascDesc,
      isCompleted: false
    };

    const createTasks = [...tasks, newTask]; 
    setTasks(createTasks);


  };

  const deleteTask = (id) => {
    console.log("id: "+id)
    const selectedTaskId = tasks.findIndex((obj) => obj.id == id);
    console.log("selectedId: "+ selectedTaskId)
    tasks.splice(Number(selectedTaskId), 1)
    setTasks([...tasks])
    console.log(tasks)

  };

  const completeTask=(id)=>{
    const selectedTaskId = tasks.findIndex((obj) => obj.id == id);
    tasks[selectedTaskId].isCompleted=true;
    setTasks([...tasks])

  }
 
  return (
    <div className="App">
     
      <TaskCreate createTask={createTask}  />
      <h1>GÖREVLER</h1>
      <TaskList   tasks={tasks} deleteTask={deleteTask}  completeTask={completeTask}/>
    </div>
  );
}

export default App;
