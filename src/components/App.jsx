import React from "react";
import { TaskProvider } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Todo App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
