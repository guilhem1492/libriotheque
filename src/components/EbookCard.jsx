import { Link } from "react-router-dom";

const EbookCard = ({ ebooks }) => {
  return (
    <div className="ebooks-list">
      {ebooks.map((ebook) => {
        return (
          <Link key={ebook.id} to={`/ebooks/${ebook.id}`}>
            <div className="card">
              {/* <h3>{ebook.title}</h3> */}
              {!ebook.authors.length ? <p></p> : <p>{ebook.authors[0].name}</p>}
              <img src={ebook.formats["image/jpeg"]} alt={ebook.title} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default EbookCard;
