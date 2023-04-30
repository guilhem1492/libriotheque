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

function App() {
  const [query, setQuery] = useState();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={"App " + theme}>
      <SearchBar setQuery={setQuery} />

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "🔆"}
      </button>

      <Routes>
        <Route path="/libriotheque" element={<HomePage />} />
        <Route
          path={`/libriotheque/ebooks/`}
          element={<EbooksSearchPage query={query} />}
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
