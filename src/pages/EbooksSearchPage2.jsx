import { useEffect } from "react";
import { Link } from "react-router-dom";
import EbookCard from "../components/EbookCard";

const EbooksSearchPage2 = ({ nextEbooks }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <EbookCard ebooks={nextEbooks} />
      <p className="next-previous-page">
        <Link to="/libriotheque/ebooks">Page précédente</Link>
      </p>
    </div>
  );
};

export default EbooksSearchPage2;
