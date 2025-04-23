
function Todo({task}) {
 

    return (
      <div className="Todo">
        <p>{task.task}</p>
        <button className="text-red-600" onClick={() => deleteTodo(todo)}>Delete</button>
      </div>
    )
      
    
  }

  export default Todo