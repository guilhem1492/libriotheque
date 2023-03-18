// import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EbooksSearchPage from "./pages/EbooksSearchPage";
import ErrorPage from "./pages/ErrorPage";
import EbookDetailsPage from "./pages/EbookDetailsPage";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const [ebooks, setEbooks] = useState([]);

  return (
    <div className="App">
      <SearchBar setEbooks={setEbooks} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ebooks" element={<EbooksSearchPage ebooks={ebooks} />} />
        <Route path="/ebooks/:ebookId" element={<EbookDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
