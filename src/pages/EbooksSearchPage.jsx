import { useState, useEffect } from "react";
import EbookCard from "../components/EbookCard";

function EbooksSearchPage({ ebooks }) {
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 1500);
  }, []);

  return (
    <div>
      {!fetching && !ebooks.length && (
        <p>Aucun ebook ne correspond à votre recherche.</p>
      )}

      <EbookCard ebooks={ebooks} />
    </div>
  );
}

export default EbooksSearchPage;
