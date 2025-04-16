import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', display: 'inline-block', width: '200px' }}>
      <img src={country.flags[0]} alt={country.name.common} style={{ width: '100%' }} />
      <h3>{country.name.common}</h3>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <Link to={`/country/${country.name.common}`}>View Details</Link>
    </div>
  );
}

export default CountryCard;
