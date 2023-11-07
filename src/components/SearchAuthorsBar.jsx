import "./components.css";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/theme.context";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import authors from "../../authors.json";

const SearchAuthorsBar = ({ setFilteredAuthors, setFetching }) => {
  const [authorSearched, setAuthorSearched] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);


  const handleChange = (e) => {
    e.preventDefault();
    setAuthorSearched(e.target.value)
  };

  useEffect(() => {
    
    if (!authorSearched.length) {
      setFilteredAuthors(authors)
    } else {
      setFilteredAuthors(authors.filter(a => a.name.toLowerCase().includes(authorSearched.toLowerCase().trim())))
      setFetching(false)
    }
    }, [authorSearched]);
  
  
  return (
    <div className={"search-bar " + theme}>
     <BackButton />

      <h2 className="libriotheque" to="/libriotheque">
        Libriothèque
      </h2>

      <div id="search-container">
      <Link id="accueil" to="/libriotheque">
        Accueil
      </Link>
      
      <input id="search-author-input"
          type="text"
          placeholder="Nom de l'auteur(e) ?"
          onChange={handleChange}
          value={authorSearched}
        />

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "🔆"}
      </button>
      </div>
    </div>
  );
};

export default SearchAuthorsBar;
