import { useState, useEffect } from "react";
import { Link} from "react-router-dom";

import authors from "../../authors.json";

const IndexAuthorsPage = () => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        setAllAuthors(authors)
      }, []);

  return (
<div>
    <h1>Index des auteurs</h1>

    {allAuthors.map((author) => {
        return (
          <Link to={`/libriotheque/ebooks/?search=${author.name}`}>
          <p id="author-line" key={author.name}>{author.name} ({!author.birth_year ? "?" : author.birth_year} – {!author.death_year ? "?" : author.death_year})</p>
          </Link>
        );
      })}
</div>
  )
}

export default IndexAuthorsPage