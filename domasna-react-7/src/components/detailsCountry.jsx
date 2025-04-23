import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";



function Details(){
    const {name} = useParams()
    const [country, setCountry] = useState(null)
    const navigate = useNavigate()

 useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(res =>{ 
            return res.json()
        })
        .then(data =>{
            setCountry(data[0])
        }).catch(err=>{ console.log(err)

        })
    }, [name])


    // ne go razbiram ova
    if (!country) {
      return <div>Loading...</div>; 
    }

   
    const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A';
    const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  return (
    <div>
     
    <div style={{ padding: '20px' }}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={country.name.common} style={{ width: '300px' }} />
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Currency:</strong> {currencies}</p>
      <p><strong>Continent:</strong> {country.continents?.[0]}</p>
      <p><strong>Language(s):</strong> {languages}</p>
      <p><strong>Time Zone(s):</strong> {country.timezones.join(', ')}</p>
      <p>
        <strong>Google Maps:</strong>{' '}
        <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
      </p>
    </div>
  

      </div>
  );
}

export default Details


