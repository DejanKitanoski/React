import { useState } from "react"

const ColorPicker = () => {
    const colors = ["red", "green", "blue", "yellow"]
    const [selectedColor, setSelectedColor] = useState("white")

    return(
        <div>
            <h1>Select color: </h1>
            <div className="buttons">
                {colors.map((color) => (
                    <button onClick={ () => setSelectedColor(color)}  style={{backgroundColor: color, color: "black"}}>{color}</button>
                ))}
            </div>
            <div className="colored-box" style={{backgroundColor: selectedColor, textAlign: "center", color: "black", border: "1px solid black" }}>{selectedColor}</div>
            
        </div>
    )
}
export default ColorPicker