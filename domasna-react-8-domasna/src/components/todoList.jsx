
import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (!newTask.trim()) return;
    setTasks((t) => [...t, newTask.trim()]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
 
  }

  function startEdit(index) {
    setEditIndex(index);
    setEditText(tasks[index]);
  }

  function saveEdit() {
   
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editText.trim();
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask} disabled={!newTask.trim()}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span className="text">{task}</span>
                <button className="edit-button" onClick={() => startEdit(index)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;