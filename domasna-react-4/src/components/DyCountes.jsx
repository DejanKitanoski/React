import { useEffect, useState } from "react"


function DynamicCounter(){
    const [counter, setCounter] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState("white")
    useEffect(()=>{
        if (counter==0) {
            setBackgroundColor("white")
        }else if(counter>0){
            setBackgroundColor("green")
        }else{
            setBackgroundColor("red")
        }
       
    },[counter])
    return(
        <div style={{backgroundColor: backgroundColor}} className="container">
            <div className="buttons">
                <button onClick={ ()=> setCounter(counter + 1)}>Increment</button>
                <button onClick={ ()=> setCounter(0)}>Reset</button>    
                <button onClick={ ()=> setCounter(counter - 1)}>Decrement</button>
            </div>
            <h1>Counter: {counter}</h1>
        </div>
    )
}

export default DynamicCounter