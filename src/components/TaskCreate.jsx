import { useState } from "react";

function TaskCreate({createTask} ) {

  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div className="task-create">
      <h1> Lütfen Task Ekleyiniz</h1>
      <form className="task-form">
        <label className="task-label"> Lütfen Başlık Giriniz</label>
        <input className="task-input" value={title} onChange={handleChange} />  
        <label className="task-label"> Task Giriniz</label>
        <textarea
          className="task-input"
          rows={5}
          value={taskDesc}
          onChange={handleTextChange}
        ></textarea>
        <button className="task-button" onClick={handleSubmit}>
          Görev ekle
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
