import { useEffect, useState } from "react";
import CountryCard from "../components/contryCard";

const Home = () =>{
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>{ 
            return res.json()
        })
        .then(data =>{
             setCountries(data)
        })
    }, [])


    function handleSearch(e) {
        setSearch(e.target.value);
      }
    
    
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    
      return (
        <div className="main-body">
          <input className="crs-bar"
            type="text"
            placeholder="Search countries..."
            value={search}
            onChange={handleSearch}
            style={{ marginBottom: '20px', padding: '8px' }}
          />
          <div>
            {filteredCountries.map((country,index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        </div>
      );
        
    
}
export default Home

// export default Home


// import { useEffect, useState } from "react";
// import CountryCard from "../components/contryCard";

// const Home = () =>{
  
//     const [search, setSearch] = useState('')

//     useEffect(()=>{
//         fetch('https://restcountries.com/v3.1/all')
//         .then(res =>{ 
//             return res.json()
//         })
//         .then(data =>{
//             const r
//         })
//     }, [])

//     const handleChange = (value) =>{
//         setSearch(values)
//         useEffect(value)
//     }


   
//     }
