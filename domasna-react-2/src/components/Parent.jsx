import React from "react";
import Child from "./Child";
 const Parent = ({name,children}) =>{
    return(
        <div className="parent">
            <h2> {name}</h2>
            <div className="children">
                {children.map((child,index)=>(
                    <Child key={index} name={child.name} age={child.age} grandchildren={child.grandchildren}/>
                    
                ))}
            </div>

        </div>
    )
 }
 export default Parent
