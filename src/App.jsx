import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EbooksSearchPage from "./pages/EbooksSearchPage";
import ErrorPage from "./pages/ErrorPage";
import EbookDetailsPage from "./pages/EbookDetailsPage";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState();
  const [theme, setTheme] = useState("light");

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={"App " + theme}>
      <SearchBar setQuery={setQuery} theme={theme} />

      <select onChange={toggleTheme}>
        <option value="light">🔆</option>
        <option value="dark">🌙</option>
      </select>

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
