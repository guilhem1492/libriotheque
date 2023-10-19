import { useState, useEffect } from "react";
import authors from "../pages/authors.json";

const IndexAuthorsPage = () => {
    const [allAuthors, setAllAuthors] = useState([]);

    const getAllAuthors = async () => {

        try {
            setAllAuthors(authors)
            
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getAllAuthors();
      }, []);
  

  return (
<div>
    <h1>Index des auteurs</h1>

    {allAuthors.map((author) => {
        return (
          <p key={author}>{author}</p>
        );
      })}
</div>
  )
}

export default IndexAuthorsPage