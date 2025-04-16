import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
      .catch(err => console.error(err));
  }, [name]);

  if (!country) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <img src={country.flags[0]} alt={country.name.common} style={{ width: '200px' }} />
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Currency:</strong> {country.currencies ? Object.values(country.currencies)[0].name : 'N/A'}</p>
      <p><strong>Continent:</strong> {country.region}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
      <p><strong>Time Zone:</strong> {country.timezones.join(', ')}</p>
      <a href={`https://www.google.com/maps?q=${country.name.common}`} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
    </div>
  );
}

export default CountryDetail;
