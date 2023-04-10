import {useState} from 'react';
import './App.css';

function App() {
  
  const [todo, setToDo] = useState([
    {name: "Shopping", priority: "high"},
    {name: "Clean bathrooms", priority: "high"},
    {name: "Bike's MOT", priority: "low"},
  ]);

  const [newTask, setNewTask] = useState('');

  const [newTaskPriority, setNewTaskPriority] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const copyToDoList = [...todo]
    copyToDoList.push({
      name: newTask,
      priority: newTaskPriority
    })
    setToDo(copyToDoList);
    setNewTask('');
  };

  const handleInput = (event) => {
    console.log(event.target.value);
    setNewTask(event.target.value);
  };

  const setPriority = (event) => {
    console.log(event.target.value);
    setNewTaskPriority(event.target.value);
  };

  return (
    <>
      <h1>To-Do List</h1>
      <ul>
        {todo.map(task => {
          return <li className={task.priority === "high" ? "high" : "low"} key={todo.indexOf(task)}>{task.name}</li>
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor='new-task'>Add new: </label>
        <input type='text' id='new-task' onChange={handleInput} value={newTask}/>
        <label htmlFor="high-priority">High</label>
        <input type="radio" id='high-priority' value="high" name="priority" onChange={setPriority}/>
        <label htmlFor="low-priority">Low</label>
        <input type="radio" id='low-priority' value="low" name="priority" onChange={setPriority}/>
        <button>Add new</button>
      </form>
    </>
  );
};

export default App;
