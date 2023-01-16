import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  
  const task = tasks.map((task, index) => (
    <Task 
      text={task.text}
      category={task.category}
      key={index}
      handleDelete={handleDelete}
    />
  ))


  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
