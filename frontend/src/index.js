import { QueryClient, QueryClientProvider } from "react-query";
// import { UserContextProvider } from "./context/useContext";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </>
);
