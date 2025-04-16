import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';

function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={handleSearch}
        style={{ marginBottom: '20px', padding: '8px' }}
      />
      <div>
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;
