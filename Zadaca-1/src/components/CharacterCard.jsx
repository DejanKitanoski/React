import React from "react";
import { useNavigate } from "react-router-dom";

function CharacterCard({ character }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-card-content">
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <button onClick={goToDetails}>More Details</button>
      </div>
    </div>
  );
}

export default CharacterCard;
