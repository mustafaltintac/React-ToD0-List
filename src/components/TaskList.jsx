import TaskDisplay from "./TaskDisplay";
import "./TaskDisplay.css";

function TaskList({ tasks,completeTask,deleteTask,focus,  }) {

  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskDisplay key={index} task={task}  completeTask={completeTask} deleteTask={deleteTask} focus={focus}    />
        );
      })}
    </div>
  );
}
export default TaskList;
