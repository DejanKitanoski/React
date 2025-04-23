
import TodoList from './components/todoList'
import './App.css'
import TodoProvider from './components/TodoContext'
import ToDoList from './components/todoList'
function App() {
  

  return (
    <TodoProvider>
      <TodoList/>
    </TodoProvider>
      
  )
}

export default App
