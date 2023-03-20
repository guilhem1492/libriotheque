import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = ({ setQuery, setEbooks, setNextEbooks }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const apiUrl = `https://gutendex.com//books?languages=fr&copyright=false,null&search=${input}`;

  const getEbooks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setEbooks(response.data.results);
      if (response.data.next !== null) {
        const apiNextPageUrl = response.data.next;
        const responseNext = await axios.get(apiNextPageUrl);
        setNextEbooks(responseNext.data.results);
      } else {
        setNextEbooks([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      setQuery(input);
      getEbooks();
      navigate(`/libriotheque/ebooks/`);
    }
  };

  return (
    <div className="search-bar">
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
