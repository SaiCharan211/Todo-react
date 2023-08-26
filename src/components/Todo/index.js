import React from 'react';
import './index.css'
function Todo ({ task, completeTask, deleteTask }){
  return (
    
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <span id="buttons">
        {!task.completed && <button onClick={() => completeTask(task.id)}>Complete</button>}
        <button className="deleteButton" onClick={() => deleteTask(task.id)
        }>Delete</button>
      </span>
    </div>
  );
};

export default Todo;
