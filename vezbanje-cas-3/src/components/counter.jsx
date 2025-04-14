
import { useState } from "react"

function Counter (){
    
    
    
    const [counter, setCounter] = useState(0)
    
    
    function incrementCounter(){
        setCounter(counter + 1)
    }

    function decrementCounter(){
        setCounter(counter - 1)
    }

    return(

        <div>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            <button onClick={incrementCounter}>click me </button>
            <button onClick={decrementCounter}>click me -1</button>
        </div>
    )
}
export default Counter 