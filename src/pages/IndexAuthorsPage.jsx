import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import SearchAuthorsBar from "../components/SearchAuthorsBar";

const IndexAuthorsPage = ({setSearchBarDisplay}) => {
    const [filteredAuthors, setFilteredAuthors] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
      setSearchBarDisplay("notDisplay")
      }, []);

  return (
<div>

  <SearchAuthorsBar setFilteredAuthors={setFilteredAuthors} setFetching={setFetching} />
  
    <h2 id="index-title">Index des auteurs</h2>

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