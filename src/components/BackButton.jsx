import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button id="back-button" onClick={() => navigate(-1)}>
      &#8617;
    </button>
  );
};

export default BackButton;
