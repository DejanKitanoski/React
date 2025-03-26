import React from "react";
import './Listltem.css';

function ListItem(){

    const tasks = [
        { name: "Learn React", priority: "High" },
        { name: "Do Groceries", priority: "Low" },
        { name: "Exercise", priority: "High" },
        { name: "Read a Book", priority: "Medium" },
    ] 

    return (
        <>
        <div className="list">
        <ul className="ul-list">
        {tasks.map((task, index)=> {
            return(
                <React.Fragment key={index}>
                    <div className="li-list">
                    <li>{task.name} 
                        <ul><li>{task.priority}</li></ul>
                    </li>
                    </div>
                </React.Fragment>
            )
        })}
        </ul>
        </div>

    </> 
    )
}
export default ListItem