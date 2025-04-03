import { useState } from 'react'
import './App.css'
import UserStatus from './components/exr-1/UserStatus'
import AdminPanel from './components/exr-1/AdminPanel'
import Login from './components/exr-1/login';
import MoodTracker from './components/exr-2/mood';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleLogin = () => { setIsLoggedIn(!isLoggedIn)}
  const toggleAdmin = () => { setIsAdmin(!isAdmin)}

  return (
    <div>
      <header>
        <h1>User Status Dashboard</h1>
        <div>
          <div>
            <h2>You are Logged {isLoggedIn ? "In" : "Out"}</h2>
            <button onClick={toggleLogin}>{ isLoggedIn ? "Logout" : "Login" }</button>
          </div>
        </div>
      </header>
        <br />
        {isLoggedIn && (
          <>
          <button onClick={toggleAdmin}>Switch to {isAdmin ? "User" : "Admin"}</button>
          <h2>Hello {isAdmin ? "Admin" : "User"}</h2>
          </>
        )}

        {isLoggedIn ? (
          <div className='user-status'>
          <UserStatus isAdmin={isAdmin}/> 
          {isAdmin && <AdminPanel/>}
          </div>
        ) : (
          <Login/>
        )}
        <h1>MOODS</h1>
        <MoodTracker/>
    </div>
  )
}

export default App


