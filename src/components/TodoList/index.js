import React from 'react';
import Todo from '../Todo';
import './index.css'

function TodoList ({ tasks, completeTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Todo
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
