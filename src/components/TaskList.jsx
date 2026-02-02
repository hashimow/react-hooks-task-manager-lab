import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks, toggleTask } = useContext(TaskContext);
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredTasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              data-testid={task.id}
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
              {task.text}
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskList;
