import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="character-details">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p className="info-title">Status: <span>{character.status}</span></p>
      <p className="info-title">Species: <span>{character.species}</span></p>
      <p className="info-title">Gender: <span>{character.gender}</span></p>
      <p className="info-title">Origin: <span>{character.origin?.name}</span></p>
      <p className="info-title">Location: <span>{character.location?.name}</span></p>
      <Link to="/" className="back-button">Back to Characters</Link>
    </div>
  );
}

export default CharacterDetails;
