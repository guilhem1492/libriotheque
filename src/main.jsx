import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/theme.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </Router>
  </>
);
