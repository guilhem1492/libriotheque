import "./pages.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EbookDetailsPage({setSearchBarDisplay}) {
  const [detailsFetching, setDetailsFetching] = useState(true);
  const [foundEbook, setFoundEbook] = useState([]);
  const { ebookId } = useParams();

  const apiUrl = `https://gutendex.com//books?ids=${ebookId}`;

  useEffect(() => {
    setSearchBarDisplay("display")
    axios.get(apiUrl).then((response) => {
      setFoundEbook(response.data.results[0]);
      setDetailsFetching(false);
    });
  }, []);

  return (
    <div className="ebook-details">
      {detailsFetching && <p className="loading">Chargement...</p>}
      {foundEbook.id && (
        <div key={foundEbook.id} className="card-details">
          <div>

            <h2>{foundEbook.title}</h2>

            {!foundEbook.authors.length ? (
              <p></p>
            ) : (
              <p>
                {foundEbook.authors[0].name} ({!foundEbook.authors[0].birth_year ? "?" : foundEbook.authors[0].birth_year} – {!foundEbook.authors[0].death_year ? "?" : foundEbook.authors[0].death_year})
              </p>
            )}

            {!foundEbook.translators.length ? (
              <p></p>
            ) : (
              <p>
                Traduction : {foundEbook.translators[0].name} (
                 {!foundEbook.translators[0].birth_year ? "?" : foundEbook.translators[0].birth_year} – {!foundEbook.translators[0].death_year ? "?" : foundEbook.translators[0].death_year})
              </p>
            )}

            <h3 className="ebook-formats">Ebook (formats) :</h3>
            <ul className="formats-list">
              <li>
                <a
                  className="button-format"
                  href={foundEbook.formats["text/html"]}
                  target="_blank"
                >
                  HTML
                </a>
              </li>
              <li>
                <a
                  className="button-format"
                  href={foundEbook.formats["application/epub+zip"]}
                  download
                >
                  EPUB
                </a>
              </li>
              <li>
                <a
                  className="button-format"
                  href={foundEbook.formats["application/x-mobipocket-ebook"]}
                  download
                >
                  MOBI
                </a>
              </li>
            </ul>
          </div>
          <img src={foundEbook.formats["image/jpeg"]} alt={foundEbook.title} />
        </div>
      )}
    </div>
  );
}

export default EbookDetailsPage;
