import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import EbookCard from "../components/EbookCard";

function EbooksSearchPage({ query, ebooks, nextEbooks }) {
  const [fetching, setFetching] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    setSearchParams({ search: query });
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setFetching(false);
    }, 1500);
  }, [ebooks]);

  return (
    <div>
      {!fetching && !ebooks.length && (
        <p>Aucun ebook ne correspond à votre recherche.</p>
      )}

      <EbookCard ebooks={ebooks} />
      {nextEbooks.length ? (
        <p className="next-previous-page">
          <Link to={`/libriotheque/ebooks/page2`}>Page suivante</Link>
        </p>
      ) : null}
    </div>
  );
}

export default EbooksSearchPage;
