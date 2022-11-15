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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
