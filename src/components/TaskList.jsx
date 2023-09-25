import { useState } from "react";
import TaskDisplay from "./TaskDisplay";
import "./TaskDisplay.css";

function TaskList({ tasks,completeTask,deleteTask }) {

  return (
    <div className="task-list">


      {tasks.map((task, index) => {
        return (
          <TaskDisplay key={index} task={task} completeTask={completeTask} deleteTask={deleteTask}  />
        );
      })}
    </div>
  );
}
export default TaskList;
