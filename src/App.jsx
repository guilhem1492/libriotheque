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

  return (
    <div className="App">
      <SearchBar setQuery={setQuery} />

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
