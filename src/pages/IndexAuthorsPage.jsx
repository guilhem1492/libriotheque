import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import BackButton from "../components/BackButton";
import authors from "../../authors.json";

const IndexAuthorsPage = ({setSearchBarDisplay}) => {
    const [filteredAuthors, setFilteredAuthors] = useState([]);
    const [authorSearched, setAuthorSearched] = useState("");
    const [fetching, setFetching] = useState(true);

    

    const handleChange = (e) => {
      e.preventDefault();
      setAuthorSearched(e.target.value)
    };

    useEffect(() => {
      setSearchBarDisplay("notDisplay")
      if (!authorSearched.length) {
        setFilteredAuthors(authors)
      } else {
        setFilteredAuthors(authors.filter(a => a.name.toLowerCase().includes(authorSearched.toLowerCase().trim())))
        setFetching(false)
      }
      }, [authorSearched]);

  return (
<div>
  <BackButton />
    <h2 id="index-title">Index des auteurs</h2>

        <input id="search-author-input"
          type="text"
          placeholder="Nom de l'auteur(e) ?"
          onChange={handleChange}
          value={authorSearched}
        />

      {!fetching && !filteredAuthors.length && (
        <p className="no-results">Aucun nom d'auteur(e) ne correspond à votre recherche.</p>
      )}

    {filteredAuthors.map((author) => {
        return (
          <Link to={`/libriotheque/ebooks/?search=${author.name}`} key={author.name}>
          <p id="author-line">{author.name} ({!author.birth_year ? "?" : author.birth_year} – {!author.death_year ? "?" : author.death_year})</p>
          </Link>
        );
      })}
</div>
  )
}

export default IndexAuthorsPage