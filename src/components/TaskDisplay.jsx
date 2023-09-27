import React, { useRef } from 'react';


function TaskDisplay({ completeTask, deleteTask, task , upDate,focus }) {


  const HandleComplateSubmit = (event) => {
    completeTask(Number(event.target.id));
  };

  const HandleSubmit = (event) => {
    deleteTask(Number(event.target.id));
  };





  
  return (
    <div 
      className={
        task.isCompleted ? "pasive-task-display" : "active-task-display"
      }
    >
      <h3>Göreviniz</h3>
      <p className={task.isCompleted ? "active-title" : "pasive-title"}>
       
        {task?.title}
      </p>
      <h3>Yapılacaklar</h3>
      <p className={task.isCompleted ? "active-desc" : "pasive-desc"}>
        
        {task?.tascDesc}
      </p>
      <input
        className="tamamla-button"
        type="button"
        value="Tamamla"
        id={task?.id}
        onClick={HandleComplateSubmit}
      />
      <input
        className="sil-button"
        type="button"
        id={task?.id}
        title={task?.title}
        tascDesc={task?.tascDesc}
        value="Güncelle"

      />
      <input
        className="sil-button"
        type="button"
        id={task?.id}
        title={task?.title}
        tascDesc={task?.tascDesc}
        value="Sil"
        onClick={HandleSubmit}
      />
    </div>
  );
}

export default TaskDisplay;
