import "./App.css";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";

import { useContext, useEffect } from "react";
import TaskContext from "./context/task";


function App() {

  const {fetchTask} = useContext(TaskContext)
  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="App">
      <TaskCreate  />
      <h1>GÖREVLER</h1>
      <TaskList />
    </div>
  );
}

export default App;
