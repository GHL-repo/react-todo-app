import { useState } from "react";
// custom components
import CustomForm from "./components/CustomForm";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const removeTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask= (id) => {
    setTasks(prevState => prevState.map(t => (t.id === id ? { ...t, checked: !t.checked } : t )))
  }

  return (
    <div className="container">
      <header>
        <h1>Task Manager 2023</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && ( 
        <TaskList 
          tasks={tasks} 
          removeTask={removeTask} 
          toggleTask={toggleTask} 
          />
        )}
    </div>
  )
}



export default App;
