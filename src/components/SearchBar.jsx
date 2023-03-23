import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = ({ setQuery, theme }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      setQuery(input);
      navigate(`/libriotheque/ebooks/?search=${input}`);
    }
  };

  return (
    <div className={"search-bar " + theme}>
      <Link id="libriotheque" to="/libriotheque">
        Librio
        <br />
        thèque
      </Link>
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre ? Auteur(e) ?"
          onChange={handleChange}
          value={input}
        />
        <button id="search-button" type="submit">
          🔎
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
