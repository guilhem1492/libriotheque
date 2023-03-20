import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EbooksSearchPage from "./pages/EbooksSearchPage";
import EbooksSearchPage2 from "./pages/EbooksSearchPage2";
import ErrorPage from "./pages/ErrorPage";
import EbookDetailsPage from "./pages/EbookDetailsPage";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState();
  const [ebooks, setEbooks] = useState([]);
  const [nextEbooks, setNextEbooks] = useState([]);

  return (
    <div className="App">
      <SearchBar
        setQuery={setQuery}
        setEbooks={setEbooks}
        setNextEbooks={setNextEbooks}
      />

      <Routes>
        <Route path="/libriotheque" element={<HomePage />} />
        <Route
          path={`/libriotheque/ebooks/page1`}
          element={
            <EbooksSearchPage
              query={query}
              ebooks={ebooks}
              nextEbooks={nextEbooks}
            />
          }
        />
        <Route
          path={`/libriotheque/ebooks/page2`}
          element={<EbooksSearchPage2 query={query} nextEbooks={nextEbooks} />}
        />
        <Route
          path="/libriotheque/ebooks/:ebookId"
          element={<EbookDetailsPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
