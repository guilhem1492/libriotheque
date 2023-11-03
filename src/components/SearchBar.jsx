import "./components.css";
import { useState, useContext } from "react";
import { ThemeContext } from "./../context/theme.context";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = ({ setQuery, searchBarDisplay }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      setQuery(input);
      navigate(`/libriotheque/ebooks/?search=${input}`);
      setInput("");
    }
  };

  if (searchBarDisplay === 'notDisplay') {
    return null;
} else {
  
  return (
    <div className={"search-bar " + theme}>
      <Link id="libriotheque" to="/libriotheque">
        Libriothèque
      </Link>

      <div id="search-container">
      <Link id="index" to="/libriotheque/index">
        Index
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

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "🔆"}
      </button>
      </div>
    </div>
  );
}
};

export default SearchBar;
