import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("name") || "";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?name=${searchTerm}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
      } catch (error) {
        setCharacters([]);
      }
    };
    fetchCharacters();
  }, [searchTerm]);

  return (
    <div>
      <h1>Characters</h1>
      <div className="character-grid">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>
    </div>
  );
}

export default CharactersPage;
