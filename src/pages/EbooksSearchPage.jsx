import "./pages.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import EbookCard from "../components/EbookCard";
import axios from "axios";

function EbooksSearchPage({ query }) {
  const [ebooks, setEbooks] = useState([]);
  const [nextEbooks, setNextEbooks] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [nextResults, setNextResults] = useState(false);
  const [ebooksQuery] = useSearchParams();

  const apiQuery = ebooksQuery.get("search");
  const apiUrl = `https://gutendex.com//books?languages=fr&copyright=false,null&search=${apiQuery}`;

  useEffect(() => {
    getEbooks();
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // setTimeout(() => {
    //   setFetching(false);
    // }, 5000);
  }, [ebooks]);

  const getEbooks = async () => {
    try {
      setFetching(true);
      setEbooks([]);
      setNextEbooks([]);
      const response = await axios.get(apiUrl);
      setEbooks(response.data.results);
      setFetching(false);
      if (response.data.next !== null) {
        const apiNextPageUrl = response.data.next;
        const responseNext = await axios.get(apiNextPageUrl);
        setNextEbooks(responseNext.data.results);
        setNextResults(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setNextResults((current) => !current);
  };

  return (
    <div>
      {fetching && <p className="loading">Chargement...</p>}
      {!fetching && !ebooks.length && (
        <p id="no-results">Aucun ebook ne correspond à votre recherche.</p>
      )}

      <EbookCard ebooks={ebooks} />

      {nextEbooks.length && nextResults ? (
        <button className="more-results-button" onClick={handleClick}>
          Afficher plus de résultats
        </button>
      ) : null}
      {!nextResults && (
        <div id="more-results">
          <EbookCard ebooks={nextEbooks} />
        </div>
      )}
    </div>
  );
}

export default EbooksSearchPage;
