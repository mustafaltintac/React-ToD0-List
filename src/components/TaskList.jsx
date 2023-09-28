import TaskDisplay from "./TaskDisplay";
import { useContext } from "react";

import TaskContext from "../context/task";
import "./TaskDisplay.css";

function TaskList() {

  const {tasks,flag,filterTask} = useContext(TaskContext)

  console.log(tasks)
  console.log(flag)
  console.log(filterTask)


  let tasksToRender = flag ? filterTask : tasks ;


  return (
    <div className="task-list">
      {tasksToRender.map((task, index) => {
        return (
          <TaskDisplay key={index} task={task}     />
        );
      })}
    </div>
  );
}
export default TaskList;
