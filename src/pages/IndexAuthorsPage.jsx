import { useState, useEffect } from "react";
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
          <p key={author.name}>{author.name} ({!author.birth_year ? "?" : author.birth_year} – {!author.death_year ? "?" : author.death_year})</p>
        );
      })}
</div>
  )
}

export default IndexAuthorsPage