import "./pages.css";
import { useState, useEffect } from "react";
import axios from "axios";
import EbookCard from "../components/EbookCard";

function HomePage() {
  const [homepagefetching, setHomepageFetching] = useState(true);
  const [popularEbooks, setPopularEbooks] = useState([]);

  let apiUrl = "https://gutendex.com//books?languages=fr&copyright=false,null";

  const getMostPopularEbooks = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPopularEbooks(response.data.results.slice(0, 8));
      setHomepageFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMostPopularEbooks();
  }, []);

  return (
    <div>
      <h1>Bienvenue à la LIBRIOTHÈQUE</h1>
      <p id="intro">
        Bibliothèque numérique proposant plus de 3500 ebooks gratuits, en
        français, à télécharger.
      </p>

      {homepagefetching && <p>Chargement...</p>}

      <EbookCard ebooks={popularEbooks} />
    </div>
  );
}

export default HomePage;
