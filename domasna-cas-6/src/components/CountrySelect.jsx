import { useState } from "react"

const DropdownForm = () => {
    const [country, setCountry] = useState("")
    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return(
        <div>
            <h2>Country</h2>
            <form onSubmit={handleSubmit}> 
                <label>
                    Select Country:
                </label>
                <select value={country} onChange={handleCountryChange}>
                    <option value="">Select</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="macedonia">Macedonia</option>
                </select>
                <button type="submit">Submit</button>
                <h3>You selected: {country}</h3>
            </form>
        </div>
    )
}
export default DropdownForm