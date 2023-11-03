import { Link } from "react-router-dom";
import { useEffect } from "react";

function ErrorPage({setSearchBarDisplay}) {

  useEffect(() => {
    setSearchBarDisplay("display")
    }, []);
  


  return (
    <div>
      <h1 style={{ fontSize: "5rem", color: "purple" }}>404</h1>
      <h1>Navré, la page que vous avez demandée est introuvable !</h1>
      <button className="more-results-button" style={{ margin: "1.5rem 10px" }}>
        <Link to="/libriotheque">Retour à la Libriothèque</Link>
      </button>
    </div>
  );
}

export default ErrorPage;
