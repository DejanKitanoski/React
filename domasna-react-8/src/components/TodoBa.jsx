import { useState } from "react"
import TodoForm from "./TodoForm"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";

uuidv4()

function TodoCard(){
    const [todos, setTodos] = useState([])

    function addTodo(todo){
        setTodos([...todos,{id: uuidv4(), task: todo, completed: false , isEdited: false}])
    }   
    return(
        <div className="TodoCard">
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                <Todo task={todo} key={index}/>
            ))}
        </div>
    )
}
export default TodoCard
