import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import EbookCard from "../components/EbookCard";

function EbooksSearchPage({ query, ebooks, nextEbooks }) {
  const [fetching, setFetching] = useState(true);
  const [nextResults, setNextResults] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    setSearchParams({ search: query });
    setNextResults(false);
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setFetching(false);
    }, 1500);
  }, [ebooks]);

  const handleClick = () => {
    setNextResults((current) => !current);
  };

  return (
    <div>
      {!fetching && !ebooks.length && (
        <p>Aucun ebook ne correspond à votre recherche.</p>
      )}

      <EbookCard ebooks={ebooks} />

      {nextEbooks.length && !nextResults ? (
        <button className="next-previous-page" onClick={handleClick}>
          Afficher plus de résultats
        </button>
      ) : null}
      {nextResults && (
        <div id="more-results">
          <EbookCard ebooks={nextEbooks} />
        </div>
      )}
    </div>
  );
}

export default EbooksSearchPage;
