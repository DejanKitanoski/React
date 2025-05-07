import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("name", value);
    navigate(`/?${searchParams.toString()}`);
  };

  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={input}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
