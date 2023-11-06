import "./components.css";
import { useNavigate, useLocation } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //console.log(location.pathname);

  if (
    location.pathname === "/libriotheque" ||
    location.pathname === "/libriotheque/"
  ) {
    return null;
  } else {
    return (
      <button id="back-button" onClick={() => navigate(-1)}>
        ❮❮
      </button>
    );
  }
};

export default BackButton;
