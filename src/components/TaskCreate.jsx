import {  useContext, useState } from "react";
import TaskContext from "../context/task";



function TaskCreate() {

  const {tasks,filter,createTask,focus,inputRefTask} = useContext(TaskContext)

  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [filterText, setFilterText] = useState("");



  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeFilter=(event)=>{
    setFilterText(event.target.value)
  }

  const handleClickFilter=(event)=>{
    event.preventDefault();
    filter(filterText);
    setFilterText("")
  }
  const handleClickFilter2=(event)=>{
    event.preventDefault();
    filter("");


  }
  

  const handleTextChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tasks.find( (nesne) => {
      return nesne.title == title}))
      {
      alert("AYNI TASK BAŞLIĞI GİRDİNİZ")
      }
    else {
      createTask(title, taskDesc);
      setTitle("");
      setTaskDesc("");
    }
    focus();
  };


 
  return (
    <div className="task-create">
      <h1> Lütfen Task Ekleyiniz</h1>
      <form className="task-form">
        <label className="task-label"> Lütfen Başlık Giriniz</label>
        <input  ref={inputRefTask} className="task-input" value={title} onChange={handleChange}  />  
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
        <div >
        <input  className="task-input-2" type="text" value={filterText}  placeholder="TASK ARAYINIZ" onChange={handleChangeFilter} />
        <button className="task-button-2" onClick={handleClickFilter}>ARA</button>
        <button className="task-button-2" onClick={handleClickFilter2}>LİSTEYE DÖN</button>
        </div>
      </form>
    </div>
  );
}


export default TaskCreate;
