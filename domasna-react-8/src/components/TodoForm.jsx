import { useState } from "react"



function  TodoForm({addTodo}){
    const [value, setValue] = useState("");

function handleSubmit (e){
    e.preventDefault();

    addTodo(value);

    
}
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text"    className="todo-input"  onSubmit={(e) => setValue(e.target.value)} placeholder="What is the tash today?"/>
            <button type="submit"  className="todo-button">Add Task</button>

            </form>
    )
}
export default TodoForm

