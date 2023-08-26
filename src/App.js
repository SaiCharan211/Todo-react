import React,{useState} from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App ()  {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
      };

      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const completeTask = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div id="app">
      <h1>To-Do List</h1>
      <div className="add-task">  
        <input
          type="text"
          placeholder="Enter task"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;


