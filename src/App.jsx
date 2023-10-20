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
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"App " + theme}>
      <SearchBar setQuery={setQuery} />

      <Routes>
        <Route path="/libriotheque" element={<HomePage />} />
        <Route
          path={"/libriotheque/ebooks/"}
          element={<EbooksSearchPage query={query} setQuery={setQuery} />}
        />
        <Route
          path="/libriotheque/ebooks/:ebookId"
          element={<EbookDetailsPage />}
        />
        <Route path="/libriotheque/index/" element={<IndexAuthorsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
