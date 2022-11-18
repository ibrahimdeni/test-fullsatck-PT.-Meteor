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
import Admin from "./pages/admin/Admin";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { API } from "./config/api";
import { setAuthToken } from "./config/api";

//init token on axios evry time the app refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  let navigate = useNavigate();

  // Init user context
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  // console.log("ini state user", state.user.user.role);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // Redirect Auth
    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.user.role === "admin") {
        navigate("/admin");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log(response);
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      console.log("payload", payload);
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<AllBook />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
