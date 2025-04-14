import { useEffect, useState } from "react"


const Users = () => {
    const [users, setUsers] = useState({})
    const id = Math.floor(Math.random() * 10) + 1
    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response ) => response.json())
        .then((data) => setUsers(data))
    }, [])
return(
    <div className="users">
            <div className="userCard">
                <h2>Name: {users.name}</h2>
                <p>City: {users.address?.city}</p>
                <p>Phone number: {users.phone}</p>
                <p>Company name: {users.company?.name}</p>
            </div>
    </div>
    )
}
export default Users