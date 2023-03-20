import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import EbookCard from "../components/EbookCard";

const EbooksSearchPage2 = ({ query, nextEbooks }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    setSearchParams({ search: query });
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <EbookCard ebooks={nextEbooks} />
      <p className="next-previous-page">
        <Link to="/libriotheque/ebooks/page1">Page précédente</Link>
      </p>
    </div>
  );
};

export default EbooksSearchPage2;
