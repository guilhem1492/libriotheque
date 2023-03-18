import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";

function EbookDetailsPage() {
  const [detailsFetching, setDetailsFetching] = useState(true);
  const [foundEbook, setFoundEbook] = useState([]);
  const { ebookId } = useParams();

  const apiUrl = `https://gutendex.com//books?ids=${ebookId}`;

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setFoundEbook(response.data.results[0]);
      setDetailsFetching(false);
    });
  }, []);

  return (
    <div className="ebook-details">
      {detailsFetching && <p>Chargement...</p>}
      {foundEbook.id && (
        <div key={foundEbook.id} className="card-details">
          <BackButton />
          <h3>{foundEbook.title}</h3>

          {!foundEbook.authors.length ? (
            <p></p>
          ) : (
            <p>
              {foundEbook.authors[0].name} ({foundEbook.authors[0].birth_year}-
              {foundEbook.authors[0].death_year})
            </p>
          )}

          {!foundEbook.translators.length ? (
            <p></p>
          ) : (
            <p>
              Traducteur : {foundEbook.translators[0].name} (
              {foundEbook.translators[0].birth_year}-
              {foundEbook.translators[0].death_year})
            </p>
          )}

          <img src={foundEbook.formats["image/jpeg"]} alt={foundEbook.title} />

          <h4 className="ebook-formats">Ebook (formats) :</h4>
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
                target="_blank"
                download
              >
                EPUB
              </a>
            </li>
            <li>
              <a
                className="button-format"
                href={foundEbook.formats["application/x-mobipocket-ebook"]}
                target="_blank"
                download
              >
                MOBI
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default EbookDetailsPage;
