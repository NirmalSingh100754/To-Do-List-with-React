import React, { useState } from "react"; // Import useState
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [inputValue, setInputValue] = useState(""); // State for input value

  const input = (e) => {
    setInputValue(e.target.value); // Update input value
  };

  const submit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue) {
      setTasks([...tasks, { text: inputValue, done: false }]); // Add new task to the list
      setInputValue(""); // Clear input field
    }
  };

  const markTaskAsDone = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          type="text"
          value={inputValue}
          onChange={input}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <Tasks tasks={tasks} markTaskAsDone={markTaskAsDone} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
