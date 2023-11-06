import "./pages.css";
import { useState, useEffect } from "react";
import axios from "axios";
import EbookCard from "../components/EbookCard";

function HomePage({setSearchBarDisplay}) {
  const [homepagefetching, setHomepageFetching] = useState(true);
  const [popularEbooks, setPopularEbooks] = useState([]);

  let apiUrl = "https://gutendex.com//books?languages=fr&copyright=false,null";

  const getMostPopularEbooks = async () => {
    try {
      let response = await axios.get(apiUrl);
      response = response.data.results
      //console.log(response);
      
      response.forEach((ebook) => {
        if (!ebook.formats["image/jpeg"] || !ebook.formats["application/epub+zip"]) {
          response.splice(response.indexOf(ebook), 1)
        }
      });

      const randomNum = Math.floor(Math.random() * 22)
      //console.log(randomNum)

      setPopularEbooks(response.slice(randomNum, randomNum + 8));
      
      setHomepageFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setSearchBarDisplay("display")
    getMostPopularEbooks();
  }, []);

  return (
    <div>
      <h1>Bienvenue à la LIBRIOTHÈQUE</h1>
      <p id="intro">
        Bibliothèque numérique proposant plus de 3600 ebooks gratuits, en
        français, à télécharger.
      </p>

      {homepagefetching && <p className="loading">Chargement...</p>}

      <EbookCard ebooks={popularEbooks} />
    </div>
  );
}

export default HomePage;
