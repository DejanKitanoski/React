
import { useState, createContext } from "react";


export const ToDoContext = createContext()


function TodoProvider({children}) {
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
  return(
    <ToDoContext.Provider value={{
        tasks,
        newTask,
        editIndex,
        editText,
        handleInputChange,
        addTask,
        deleteTask,
        startEdit,
        saveEdit,
        setEditText,
      }}>
        {children}
      </ToDoContext.Provider>
  )
}

export default TodoProvider