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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
