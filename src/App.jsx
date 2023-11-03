import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "./context/theme.context";

import EbooksSearchPage from "./pages/EbooksSearchPage";
import ErrorPage from "./pages/ErrorPage";
import EbookDetailsPage from "./pages/EbookDetailsPage";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import IndexAuthorsPage from "./pages/IndexAuthorsPage";

function App() {
  const [query, setQuery] = useState();
  const [searchBarDisplay, setSearchBarDisplay] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"App " + theme}>
      <SearchBar setQuery={setQuery} searchBarDisplay={searchBarDisplay} />

      <Routes>
        <Route path="/libriotheque" element={<HomePage setSearchBarDisplay={setSearchBarDisplay} />} />
        <Route
          path={"/libriotheque/ebooks/"}
          element={<EbooksSearchPage query={query} setQuery={setQuery} setSearchBarDisplay={setSearchBarDisplay} />}
        />
        <Route
          path="/libriotheque/ebooks/:ebookId"
          element={<EbookDetailsPage setSearchBarDisplay={setSearchBarDisplay} />}
        />
        <Route path="/libriotheque/index/" element={<IndexAuthorsPage setSearchBarDisplay={setSearchBarDisplay} />} />
        <Route path="*" element={<ErrorPage setSearchBarDisplay={setSearchBarDisplay} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
