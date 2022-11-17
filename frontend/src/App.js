import React from "react";
import LandingPage from "./pages/landingPage/landingPage";
import {
  Routes,
  Route,
  useNavigate,
  Redirect,
  useParams,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/client/home";
import AllBook from "./pages/client/AllBook";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<AllBook />} />
      </Routes>
    </>
  );
};

export default App;
